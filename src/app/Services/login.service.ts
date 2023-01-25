import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpclient:HttpClient) { }
  LoginUser(LoginDetails:any):Observable<any> {
    return this.httpclient.post<any>("http://localhost:1880/login", LoginDetails)
  }
}
