import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  private apiURL='http://localhost:4500';

  constructor(private http:HttpClient) { }

  public getProductListData():Observable<any>{
    return this.http.get<any>(this.apiURL+'/products')
  }

  public getProductDataByID(id:number):Observable<any>{
    return this.http.get<any>(this.apiURL+'/products/'+id)
  }

  public productSearchData(value:string):Observable<any>{
    return this.http.get<any>(this.apiURL+'/products/'+'?q='+value);
  }

  public addToCartProduct(value:string):Observable<any>{
    return this.http.post<any>(this.apiURL+'/addToCart/',value);
  }

  public getAddToCartProduct():Observable<any>{
    return this.http.get<any>(this.apiURL+'/addToCart/');
  }

  public removeAddToCartProduct(id:number):Observable<any>{
    return this.http.delete<any>(this.apiURL+'/addToCart/'+id);
  }
}