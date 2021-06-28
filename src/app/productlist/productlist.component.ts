import { Component, OnInit } from '@angular/core';
import { products } from '../products/products';
import { ProductsdataService } from '../productsdata.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  //providers: [{provide:ProductsdataService, useClass:ProductsdataService}]
})
export class ProductlistComponent implements OnInit {
  isadmin:boolean=true;
  productlist:Array<products>;
  constructor(pdataservice:ProductsdataService){
    //let pdataservice = new ProductsdataService();
    this.productlist = pdataservice.getproductlist();
  }

  

  delete(pid:number){
    for(var i=0; i< this.productlist.length; i++){
      if(this.productlist[i].id == pid){
        this.productlist.splice(i,1);
        }
    }
  }
  addtocart(pid:Number){
    for(var i=0; i< this.productlist.length; i++){
      if(this.productlist[i].id == pid){
        alert(this.productlist[i].name +" added to cart");
        }
    }
  }

  

  ngOnInit(): void {
  }

}
