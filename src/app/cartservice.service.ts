import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { products } from './products/products';
@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  cartitems:Array<products>;
  constructor() { 
    this.cartitems = new Array<products>();
  }
  
  setcart(cart:products){
    this.cartitems.push(cart);
  }
  getcart():Array<products>{
    return this.cartitems;
  }
  
}
