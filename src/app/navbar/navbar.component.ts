import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { user } from '../user/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userlist:Array<user>;
  constructor() { 
    this.userlist = new Array<user>();

    let u1 = new user("shreyas", "hupare", "SMH", "abc@gmail.com", "07/12/1999");
    console.log("insdie navbar!");
    this.userlist.push(u1);
  }
  ngOnInit(): void {
  }

}
