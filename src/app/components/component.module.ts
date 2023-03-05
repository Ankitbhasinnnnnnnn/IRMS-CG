import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { TopHeaderComponent } from './top-header/top-header.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    CardModule,
    AvatarModule,
    ButtonModule,
    RippleModule,
    DividerModule,
    ProgressBarModule,
    ToastModule,
    MenuModule,
    SelectButtonModule,
    TableModule,
    SidebarModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    TopHeaderComponent,
    LeaveManagementComponent,
  ],
  exports: [FooterComponent, NavbarComponent, SidebarComponent],
})
export class ComponentsModule {}
