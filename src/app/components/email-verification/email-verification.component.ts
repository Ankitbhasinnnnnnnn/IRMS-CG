import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';
import * as md5 from 'md5';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {
  public value:string = "";
  public email: string = '';
  constructor(private registerservice: RegisterService , private routing:Router ) { }

  ngOnInit(): void {
    this.email = RegisterService.getEmail();
  }
  VerfiyOtp(otp:string) {
    debugger;
    RegisterService.getEmail();
    
    
    const creditianls = {
      email:  RegisterService.getEmail(),
      otp: otp
    }
    

const hashedOTP = md5(otp);
const localStorageOTP = localStorage.getItem("otp");
if(hashedOTP == localStorageOTP) {
  console.log("OTP verified");
  
  this.routing.navigate(["/login"])
  this.value = 'login'
console.log(this.value);
}
else{
  alert("OTP cannot be verified!!")
}


  }
}
