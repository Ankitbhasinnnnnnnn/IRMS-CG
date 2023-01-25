import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/Services/register.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private registerservices: RegisterService, private approuting:Router) { }

  ngOnInit(): void {
  }
signup(email:any, password:any) {
  debugger;
  const userdata = {
    email: email,
    password: password
  }
  this.registerservices.registerUser(userdata).subscribe((resp:any) => {
    console.log(resp);
    console.log(resp.isRegistered);
    
    if(resp.isRegistered == true) {
      this.approuting.navigate(["/verify"]);
    }
    RegisterService.setEmail(email);

    
  });
}
}
