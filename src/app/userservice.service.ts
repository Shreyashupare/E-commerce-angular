import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './user/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  getuser():Observable<user[]>{
    return this.http.get<user[]>('http://jsonplaceholder.typicode.com/users');
  }
}
