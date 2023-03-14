import { Component } from '@angular/core';
import {ForgotPasswordService} from 'src/app/Services/Forgot-password/forgot-password.service'
import { Router } from '@angular/router';
import {  lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
public confirmpassword: boolean = false;
constructor( private forgotPassword:ForgotPasswordService, private routing:Router ) { }

ChangePassword = (NewPassword:any) => { 
  console.log(NewPassword.value);
  this.confirmpassword = true;
  
}
}
