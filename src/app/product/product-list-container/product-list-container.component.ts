import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommunicationService } from 'src/app/core/service/communication.service';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss'],
})
export class ProductListContainerComponent implements OnInit {
  public productList$!: Observable<any>;
  public productDetails$!: Observable<any>;
  public id = this.activatedRoute.snapshot.params['id'];

  constructor(
    private productService: ProductService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private communication:CommunicationService
  ) {
    if (this.id) {
      this.productDetails$ = this.productService.getProductDataByID(this.id);
    } else {
      this.productList$ = this.productService.getProductListData();
    }
  }

  ngOnInit(): void {}

  public searchProduct(value: string) {
    this.productList$ = this.productService.productSearchData(value);
  }

  public addToCart(value: string) {
    this.productService.addToCartProduct(value).subscribe((res) => {
      this.communication.setCartLength(true);
      alert('Added SuccessFully');
      this.router.navigate(['/']);
    },(error:any)=>{
      alert('Already Added');
    });
  }
}
