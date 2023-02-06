import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/Components/dashboard/dashboard.component';
import { MySkillComponent } from 'src/app/Components/my-skill/my-skill.component';
import { UserDetailsComponent } from 'src/app/Components/user-details/user-details.component';
import { VideoPanelComponent } from 'src/app/Components/video-panel/video-panel.component';

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'my-skills', component: MySkillComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'video-panel', component: VideoPanelComponent },
  // { path: "rtl", component: RtlComponent }
];
