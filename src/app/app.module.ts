import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
