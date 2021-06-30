import { CartserviceService } from './../cartservice.service';
import { Component, OnInit } from '@angular/core';
import { products } from '../products/products';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productlist:Array<products>=[];
  constructor(private cartser:CartserviceService) { }

  ngOnInit(): void {
    this.cartser.getcart().subscribe(newcartproduct=>{
      console.log(newcartproduct);
      this.productlist.push(newcartproduct);
      console.log(this.productlist);
      console.log(this.productlist.length);
    })
  }
  
  remove(pid:number){
    for(var i=0; i< this.productlist.length; i++){
      if(this.productlist[i].id == pid){
        this.productlist.splice(i,1);
        }
    }
  }
}
