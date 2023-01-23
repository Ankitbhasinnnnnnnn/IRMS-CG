import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/Services/register.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private registerservices: RegisterService) { }

  ngOnInit(): void {
  }
signup() {
  debugger;
  const userdata = {
    email: "ankitbhasin37@gmail.com",
    password: "123"
  }
  this.registerservices.registerUser(userdata).subscribe((resp:any) => {
    console.log(resp.msg);
    
  });
}
}
