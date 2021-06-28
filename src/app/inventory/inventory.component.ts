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
  constructor(pdataservice:ProductsdataService){
    //let pdataservice = new ProductsdataService();
    this.productlist = pdataservice.getproductlist();
  }
  ngOnInit(): void {
  }

}
