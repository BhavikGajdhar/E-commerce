import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ProductListPresenterService } from '../product-list-presenter/product-list-presenter.service';

@Component({
  selector: 'app-product-details-presentation',
  templateUrl: './product-details-presentation.component.html',
  styleUrls: ['./product-details-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [ProductListPresenterService],
})
export class ProductDetailsPresentationComponent implements OnInit {
  @Input() public set productDetailById(detailData: any) {
    if (detailData) {
      this._productDetailById = detailData;
    }
  }
  public get productDetailById(): any {
    return this._productDetailById;
  }
  @Output() addToCartData = new EventEmitter<string>();
  private _productDetailById: any = [];
  constructor(
    private productListPresenter: ProductListPresenterService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.productListPresenter.addToCartData$.subscribe((data: any) => {
      this.addToCartData.emit(data);
    });
  }
  public addToCart(value: any) {
    this.productListPresenter.addToCart(value);
  }
  public loginWithRedirect(): void {
    this.auth.loginWithPopup();
  }
}
