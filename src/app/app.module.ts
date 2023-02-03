import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import {HttpClientModule } from '@angular/common/http'
import { ComponentsModule } from './components/component.module';
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { VideoPanelComponent } from './components/video-panel/video-panel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SplitterModule } from "primeng/splitter";
import { PanelMenuModule } from 'primeng/panelmenu';
import {YouTubePlayerModule} from '@angular/youtube-player';



@NgModule({
  declarations: [AppComponent, SignupComponent, LoginComponent, EmailVerificationComponent,AdminLayoutComponent,AuthLayoutComponent , VideoPanelComponent],
  imports: [BrowserModule,BrowserAnimationsModule, AppRoutingModule, NgbModule,ComponentsModule,HttpClientModule , SplitterModule, PanelMenuModule, YouTubePlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
