import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent  implements OnInit{
  gfg:any = '';
name: string = '';
email: string = '';
  items: MenuItem[] = [];
  
  value1: any = 'My Learning';
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
  ngOnInit(): void {
    

  this.primengConfig.ripple = true;

        this.items = [{
            label: this.name,
            },
            {
                label: this.email,
                items: [{
                    label: 'Account settings',
                    
                    url: 'http://angular.io'
                },
                {
                    label: 'Logout',
                   
                }
            ]}
        ];
  }
  redirectToLoginPage(val: any) {
    console.log(val);

    if (val === 'btn-2') {
      this.approuting.navigate(['apply-leave']);
    } else {
      this.approuting.navigate(['dashboard']);
    }
  }
}
