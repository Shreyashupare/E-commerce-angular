import { Injectable } from '@angular/core';
import { Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsloginService {

  constructor() { }
  subject = new Subject<boolean>();
  setlog(islogin:boolean){
    this.subject.next(islogin);
  }
  getlog():Observable<boolean>{
    return this.subject.asObservable();
  }
}
