import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { products } from './products/products';
@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  constructor() { }
  subject = new Subject<products>();
  setcart(cart:products){
    this.subject.next(cart);
  }
  getcart():Observable<products>{
    return this.subject.asObservable();
  }

}
