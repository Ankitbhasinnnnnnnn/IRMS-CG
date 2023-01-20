import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'verify', component: EmailVerificationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: "dashboard",
    redirectTo: "dashboard",
    pathMatch: "full",
    
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
