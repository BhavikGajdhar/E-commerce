import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CommunicationService {

  public refreshCart= new BehaviorSubject<boolean>(false);
  public refreshHeader$:Observable<boolean>; 
 
  constructor(){
    this.refreshHeader$ = this.refreshCart.asObservable();
  }

  setCartLength(value: boolean) {
   this.refreshCart.next(value);
  }
}
