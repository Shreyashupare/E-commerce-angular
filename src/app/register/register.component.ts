import { Component, OnInit } from '@angular/core';
import { user } from '../user/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userlist:Array<user>;
  constructor() { 
    this.userlist = new Array<user>();

    //let u1 = new user("shreyas", "hupare", "SMH", "abc@gmail.com", "07/12/1999");
    //this.userlist.push(u1);
  }

  ngOnInit(): void {
  }

}
