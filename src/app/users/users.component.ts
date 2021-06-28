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
    this.userser.getuser().subscribe(users=>{
      this.userlist = users;
      console.log(this.userlist[1].name);
    },error=>console.log('error while fetching the data'))
  }
  

}
