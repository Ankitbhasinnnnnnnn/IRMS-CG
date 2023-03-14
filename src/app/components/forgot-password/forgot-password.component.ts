import { Component } from '@angular/core';
import {ForgotPasswordService} from 'src/app/Services/Forgot-password/forgot-password.service'
import { Router } from '@angular/router';
import {  lastValueFrom } from 'rxjs';
import * as md5 from 'md5';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
public VerfiyScreen :boolean = false;
public email :string = "";
public setOTP: string = "";
public otp: any = "";
constructor( private forgotPassword:ForgotPasswordService, private routing:Router ) { }



  EmailSubmit = async (Email:any) => {
    debugger;

  this.email = Email;
  this.VerfiyScreen = true;
  const sendEmail = {
    email: Email
  }
  var res =  await lastValueFrom(await this.forgotPassword.Forgotpassword(sendEmail))  

 console.log(res);
 
const hashedOTP = res.otp;
this.setOTP = hashedOTP;
console.log(hashedOTP);
sessionStorage.setItem("Otp", hashedOTP);

}

SubmitOTP = (forgotpasswordOTP:string) => {
  
  this.otp =  md5(forgotpasswordOTP);
  debugger
  if( this.setOTP == this.otp) {
    this.routing.navigate(["/new-password"]);
  

  }
  else  {
    alert("wrong Otp");
  }
  
}
}
