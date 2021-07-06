
/*
import { UserserviceService } from './../userservice.service';
import { Component, OnInit } from '@angular/core';
import { user } from '../user/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userlist:Array<user>;
  constructor(private userser:UserserviceService) { }

  ngOnInit(){
    this.userlist = this.userser.getuser();
    console.log(this.userlist);
  }
  

}
*/
import { Component, OnInit } from '@angular/core';
import { user } from '../user/user';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userlist:Array<user>;
  constructor(private userser:UserserviceService) { }

  ngOnInit(){
    this.userlist = this.userser.getuser();
    console.log(this.userlist);
  }
  

}
