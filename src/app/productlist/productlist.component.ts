import { CartserviceService } from './../cartservice.service';
import { Component, OnInit } from '@angular/core';
import { products } from '../products/products';
import { ProductsdataService } from '../productsdata.service';
import { IsloginService } from '../islogin.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  //providers: [{provide:ProductsdataService, useClass:ProductsdataService}]
})
export class ProductlistComponent implements OnInit {
  isadmin:boolean=false;
  loggedin:boolean=false;
  productlist:Array<products>;
  constructor(private pdataservice:ProductsdataService, private cartser:CartserviceService, private islog:IsloginService){
    //let pdataservice = new ProductsdataService();

    this.loggedin = islog.get();
  }
  ngOnInit() {
    this.productlist = this.pdataservice.getproductlist();
    
      console.log('in productlist'+ this.loggedin);
    }
  
  

  delete(pid:number){
    for(var i=0; i< this.productlist.length; i++){
      if(this.productlist[i].id == pid){
        this.productlist.splice(i,1);
        }
    }
  }
  addtocart(pid:Number){
    
    //console.log('in product addcart '+this.islogged);
    /*
    if(this.islogged == false){
      alert("You are not logged in.");
      return;
    }
    */
    for(var i=0; i< this.productlist.length; i++){
      if(this.productlist[i].id == pid){
        this.cartser.setcart(this.productlist[i]);
        alert(this.productlist[i].name +" added to cart");
        }
    }
  }


}
