import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { ProductListPresenterService } from '../product-list-presenter/product-list-presenter.service';

@Component({
  selector: 'app-product-list-presentation',
  templateUrl: './product-list-presentation.component.html',
  styleUrls: ['./product-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [ProductListPresenterService],
})
export class ProductListPresentationComponent implements OnInit, AfterViewInit {
  searchText!: string;

  @ViewChild('searchForm')
  searchForm!: NgForm;

  @Input() public set productList(listData: any) {
    if (listData) {
      this._productList = listData;
    }
  }
  public get productList(): any {
    return this._productList;
  }
  @Output() searchData = new EventEmitter<string>();

  private _productList: any = [];

  constructor(private productListPresenter: ProductListPresenterService) { }

  ngOnInit(): void {
    this.productListPresenter.productData$.subscribe((data: string) => {
      this.searchData.emit(data);
    });
  }

  ngAfterViewInit(): void {
    this.searchForm.valueChanges
      ?.pipe(
        map((data) => data.search),
        debounceTime(750),
        distinctUntilChanged()
      )
      .subscribe((res: string) => {
        this.productListPresenter.productSearch(res);
      });
  }
}
