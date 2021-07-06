import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { IsloginService } from '../islogin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:string;
  islogin:boolean=false;
  isadmin:boolean=true;
  constructor(private auth:AuthService, private islog:IsloginService, private router:Router) { 

    
  }
  ngOnInit(){
    this.auth.getusername().subscribe(newusername=>{
      this.username = newusername;
    })
    this.islog.getlog().subscribe(islogged=>{
      this.islogin = islogged;
    })
  }
  logout(){
    this.islogin = false;
    this.router.navigateByUrl('/login');
    this.islog.set(false);
  }

}
