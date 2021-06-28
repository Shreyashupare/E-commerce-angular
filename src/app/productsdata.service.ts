
import { Injectable } from '@angular/core';
import { products } from './products/products';
@Injectable({
  providedIn: 'root'
})


export class ProductsdataService {

  productlist:Array<products>;
  isadmin:boolean=true;
  constructor() { 
    this.productlist = new Array<products>();
    console.log("singleton serice!");
    let p1 = new products(1, "one plus nord", 25000,"../../assets/nord1.png");
    let p2 = new products(2, "samsang A52", 22500, "../../assets/samsung1.png");
    let p3 = new products(3, "Realme 7 pro", 19000, "../../assets/realme1.png");
    this.productlist.push(p1);
    this.productlist.push(p2);
    this. productlist.push(p3);
  } 
  getproductlist(){
    return this.productlist;
  }
}





