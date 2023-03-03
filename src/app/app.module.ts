import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './Components/component.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Components/login/login.component';
import { EmailVerificationComponent } from './Components/email-verification/email-verification.component';
import { VideoPanelComponent } from './Components/video-panel/video-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplitterModule } from 'primeng/splitter';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabMenuModule } from 'primeng/tabmenu';
// import { YouTubePlayerModule } from '@angular/youtube-player';
import { CardModule } from 'primeng/card';
import { KnobModule } from 'primeng/knob';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    EmailVerificationComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    VideoPanelComponent,
    ForgotPasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ComponentsModule,
    HttpClientModule,
    SplitterModule,
    PanelMenuModule,
    KnobModule,
    CardModule,
    TabMenuModule,
    AccordionModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
