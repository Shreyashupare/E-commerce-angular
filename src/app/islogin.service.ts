import { Injectable } from '@angular/core';
import { Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsloginService {
  loggedin:boolean=false;
  constructor() { }
  subject = new Subject<boolean>();
  setlog(islogin:boolean){
    this.subject.next(islogin);
  }
  getlog():Observable<boolean>{
    return this.subject.asObservable();
  }
  set(logged:boolean){
    this.loggedin=logged;
  }
  get():boolean{
    return this.loggedin;
  }
}
