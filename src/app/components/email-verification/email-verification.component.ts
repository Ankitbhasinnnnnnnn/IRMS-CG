import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';
@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {
  public value:string = "";
  constructor(private registerservice: RegisterService , private routing:Router ) { }

  ngOnInit(): void {
  }
  VerfiyOtp(otp:string) {
    debugger;
    RegisterService.getEmail();
    
    
    const creditianls = {
      email:  RegisterService.getEmail(),
      otp: otp
    }
    
this.registerservice.VerifyOtp(creditianls).subscribe((resp:any) => {

if(resp.isOTPVerified == 'true'  ) {
  console.log(resp);
  this.routing.navigate(["/login"])
  this.value = 'login'
console.log(this.value);
}

});
  }
}
