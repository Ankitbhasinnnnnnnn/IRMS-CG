import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'primeng/calendar';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { SidebarComponent } from '../Components/sidebar/sidebar.component';
import { FooterComponent } from '../Components/footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, CalendarModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent, CalendarModule],
})
export class ComponentsModule {}
