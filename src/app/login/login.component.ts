
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IsloginService } from '../islogin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  islogin:boolean=false;
  isadmin:boolean=false;
  constructor(private auth:AuthService, private router:Router, private islog:IsloginService) { }

  ngOnInit(): void {
  }
  login(){
    this.islogin=true;
    this.islog.setlog(this.islogin);
    this.islog.set(this.islogin);
    this.auth.setusername(this.username);
    this.router.navigateByUrl('/products');
  }
}
