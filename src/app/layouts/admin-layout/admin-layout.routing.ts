import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { MySkillComponent } from 'src/app/components/my-skill/my-skill.component';

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'my-skills', component: MySkillComponent },
  // { path: "rtl", component: RtlComponent }
];
