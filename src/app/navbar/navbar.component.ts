import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { IsloginService } from '../islogin.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:string;
  islogin:boolean=false;
  isadmin:boolean=true;
  constructor(private auth:AuthService, private islog:IsloginService) { 

    
  }
  ngOnInit(){
    this.auth.getusername().subscribe(newusername=>{
      this.username = newusername;
    })
    this.islog.getlog().subscribe(islogged=>{
      this.islogin = islogged;
    })
  }

}
