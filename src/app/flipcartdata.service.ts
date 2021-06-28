import { Injectable } from '@angular/core';
import { products } from './products/products';
import { ProductsdataService } from './productsdata.service';
@Injectable({
  providedIn: 'root'
})

export class FlipcartdataService extends ProductsdataService {

  productlist:Array<products>;
  isadmin:boolean=true;
  constructor() { 
    super();
    this.productlist = new Array<products>();
    console.log("amazon service!");
    let p1 = new products(1, "one plus nord", 25000,"../../assets/nord1.png");
    let p2 = new products(2, "samsang A52", 22500, "../../assets/samsung1.png");
    let p3 = new products(3, "Realme 7 pro", 19000, "../../assets/realme1.png");

    //let p4 = new products(4, "flipcart", 2345);
    this.productlist.push(p1);
    this.productlist.push(p2);
    this.productlist.push(p3);
    //this.productlist.push(p4);
  } 
  getproductlist(){
    return this.productlist;
  }
}