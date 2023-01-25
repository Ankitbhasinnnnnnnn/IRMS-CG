import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
static email:any; 

  constructor(private httpclient: HttpClient) { }

  registerUser(userdata:any): Observable<any> {
    debugger;
    return this.httpclient.post<any>("http://localhost:1880/register" , userdata );
  }
  VerifyOtp(creditianls:any): Observable<any> {
    debugger;
    return this.httpclient.post<any>("http://localhost:1880/verifyOTP" , creditianls );
  }
  static getEmail(){
    return RegisterService.email ;
  }
  static setEmail(email: string){
    RegisterService.email = email;
  }
}
