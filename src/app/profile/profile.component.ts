import { Component, OnInit } from '@angular/core';
import { user } from '../user/user';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userlist:Array<user>;
  constructor(private userser:UserserviceService) { }

  ngOnInit(){
    this.userlist = this.userser.getuser();
    console.log(this.userlist);
  }
  

}
