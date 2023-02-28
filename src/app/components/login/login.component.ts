import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public LoginCreditianls: object = {};
  constructor(private loginservice: LoginService , private route:Router) { }

  ngOnInit(): void {

  }
  LoginUser(email:string, password:string) {
    debugger;
    this.LoginCreditianls = {
      email: email,
      password: password
    }
    this.loginservice.LoginUser(this.LoginCreditianls).subscribe((resp:any) => {
      if(resp.isValid == true) {
      this.route.navigate(["/dashboard"]);
      sessionStorage.setItem("Email", email);
      }
    });
  }
  forgetPassword(){
    // this.route.navigate(['']) // this is for the forget password to na igate to that page
  }

  redirectToRegisterPage(){
    this.route.navigate(['register'])
  }
}
