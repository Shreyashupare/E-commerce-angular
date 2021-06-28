import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  subject = new Subject<string>();
  setusername(username:string){
    this.subject.next(username);
  }
  getusername():Observable<string>{
    return this.subject.asObservable();
  }
}
