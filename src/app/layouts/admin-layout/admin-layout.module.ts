import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { MySkillComponent } from 'src/app/Components/my-skill/my-skill.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { UserDetailsComponent } from 'src/app/Components/user-details/user-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../Components/component.module';

@NgModule({
  declarations: [
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
    ComponentsModule,
  ],
})
export class AdminLayoutModule {}
