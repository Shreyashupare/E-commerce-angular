import { Injectable } from '@angular/core';
import { ProductsdataService } from './productsdata.service';
import { products } from './products/products';
@Injectable({
  providedIn: 'root'
})


export class AmazondataService extends ProductsdataService {

  productlist:Array<products>;
  isadmin:boolean=true;
  constructor() { 
    super();
    this.productlist = new Array<products>();
    console.log("amazon service!");
    let p1 = new products(1, "one plus nord", 25000);
    let p2 = new products(2, "samsang A52", 22500);
    let p3 = new products(3, "Realme 7 pro", 19000);
    let p4 = new products(4, "amazon", 2345);
    this.productlist.push(p1);
    this.productlist.push(p2);
    this.productlist.push(p3);
    this.productlist.push(p4);
  } 
  getproductlist(){
    return this.productlist;
  }
}