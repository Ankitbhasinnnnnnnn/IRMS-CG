import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { MySkillComponent } from "src/app/components/my-skill/my-skill.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { UserDetailsComponent } from "src/app/components/user-details/user-details.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ComponentsModule } from "../../components/component.module";

@NgModule({
    declarations: [
        DashboardComponent,
        MySkillComponent,
        UserDetailsComponent,
        
        // RtlComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ComponentsModule
    ]
})
export class AdminLayoutModule {}
