import { CartserviceService } from './../cartservice.service';
import { Component, OnInit } from '@angular/core';
import { products } from '../products/products';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productlist:Array<products>;
  constructor(private cartser:CartserviceService) {
    this.productlist = cartser.getcart();
    }
   

  ngOnInit(){
    
  }
  
  remove(pid:number){
    for(var i=0; i< this.productlist.length; i++){
      if(this.productlist[i].id == pid){
        this.productlist.splice(i,1);
        }
    }
  }
}
