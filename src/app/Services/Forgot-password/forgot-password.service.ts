import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  constructor(private httpclient:HttpClient) { }
  async Forgotpassword(LoginDetails:any) {
    debugger;
    return this.httpclient.post<any>("http://localhost:1880/resendOTP", LoginDetails)
  }
  async Changepassword(ChangePasswordDetails:any) {
    return this.httpclient.post<any>("http://localhost:1880/forgetPassword", ChangePasswordDetails)
  }
}
