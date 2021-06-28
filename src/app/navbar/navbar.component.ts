import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:string;
  constructor(private auth:AuthService) { 

    
  }
  ngOnInit(){
    this.auth.getusername().subscribe(newusername=>{
      this.username = newusername;
    })
  }

}
