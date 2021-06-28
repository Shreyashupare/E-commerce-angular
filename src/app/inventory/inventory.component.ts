import { ProductsdataService } from './../productsdata.service';
import { Component, OnInit } from '@angular/core';
import { products } from '../products/products';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  //providers: [{provide:ProductsdataService, useClass:ProductsdataService}]
})
export class InventoryComponent implements OnInit {
  productlist:Array<products>;
  constructor(private pdataservice:ProductsdataService){
    //let pdataservice = new ProductsdataService();
    
  }
  ngOnInit(): void {
    this.productlist = this.pdataservice.getproductlist();
  } 

  setnewprice(np:number, idn:number){
    for(var i=0; i < this.productlist.length; i++){
      if(this.productlist[i].id == idn){
        this.productlist[i].price =np;
      }
    }
  }

}
