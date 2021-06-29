import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.auth.setusername(this.username);
    this.router.navigateByUrl('/products');
  }
}
