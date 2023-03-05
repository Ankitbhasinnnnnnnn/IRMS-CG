import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EmailVerificationComponent } from './Components/email-verification/email-verification.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { VideoPanelComponent } from './Components/video-panel/video-panel.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LeaveManagementComponent } from './Components/leave-management/leave-management.component';
import { NewPasswordComponent } from './Components/new-password/new-password.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'verify', component: EmailVerificationComponent },
  { path: 'video-panel', component: VideoPanelComponent },
  { path: 'apply-leave', component: LeaveManagementComponent },
  {path: 'forgot-password', component:  ForgotPasswordComponent},
  {path: 'new-password' , component: NewPasswordComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layouts/admin-layout/admin-layout.module').then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layouts/auth-layout/auth-layout.module').then(
            (m) => m.AuthLayoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
