import { Component } from '@angular/core';
import 
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
public VerfiyScreen :boolean = false;
public email :string = "";


EmailSubmit = (Email:any) => {
  this.email = Email;
  this.VerfiyScreen = true;
}
}
