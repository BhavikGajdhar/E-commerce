import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class ProductListPresenterService {
  public productData: Subject<string> = new Subject();
  public productData$: Observable<any>;

  public addToCartData: Subject<string> = new Subject();
  public addToCartData$: Observable<any>;

  constructor() {
    this.productData$ = this.productData.asObservable();
    this.addToCartData$ = this.addToCartData.asObservable();
  }
  public productSearch(value: string) {
    if (value !== undefined) {
      this.productData.next(value);
    }
  }
  public addToCart(value:any){
    if(value){
      this.addToCartData.next(value)
    }
  }
}
