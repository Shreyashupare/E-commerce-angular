import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './user/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  userlist:Array<user>
  constructor() { 
    this.userlist = new Array<user>();
    let u1= new user("shreyas", "hupare", "shreyas08", "abc@gmail.com", 1234567890, "********");
    this.userlist.push(u1);
  }
  getuser(){
    return this.userlist;
  }
  /*getuser():Observable<user[]>{
    return this.http.get<user[]>('http://jsonplaceholder.typicode.com/users');
  }
  */
}
