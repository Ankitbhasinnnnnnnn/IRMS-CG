import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent {
  items: MenuItem[] = [];
  name: string = '';
  value1: any = 'off';
  stateOptions: any[];

  constructor(
    private primengConfig: PrimeNGConfig,
    private approuting: Router
  ) {
    this.stateOptions = [
      { label: 'My Learning', value: 'My Learning' },
      { label: 'Leave Management', value: 'Leave Management' },
    ];
  }
  redirectToLoginPage(val: any) {
    console.log(val);

    if (val === 'Leave Management') {
      this.approuting.navigate(['apply-leave']);
    } else {
      this.approuting.navigate(['dashboard']);
    }
  }
}
