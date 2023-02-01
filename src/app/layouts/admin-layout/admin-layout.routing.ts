import { Routes } from "@angular/router";
import { MySkillComponent } from "src/app/components/my-skill/my-skill.component";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  {path: "my-skills", component: MySkillComponent}
  // { path: "rtl", component: RtlComponent }
];
