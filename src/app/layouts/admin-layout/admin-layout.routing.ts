import { Routes } from "@angular/router";
import { MySkillComponent } from "src/app/components/my-skill/my-skill.component";
import { UserDetailsComponent } from "src/app/components/user-details/user-details.component";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  {path: "my-skills", component: MySkillComponent},
  {path: "user-details" , component: UserDetailsComponent}
  // { path: "rtl", component: RtlComponent }
];
