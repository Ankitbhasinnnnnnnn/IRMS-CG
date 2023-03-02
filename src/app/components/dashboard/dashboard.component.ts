import { Component,OnInit } from '@angular/core';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
  items: MenuItem[]=[];
  
gfg:any = '';
name: string = '';
email: string = '';
stateOptions = [
  { label: 'Off', value: 'off' },
  { label: 'On', value: 'on' },
];


constructor(private messageService: MessageService,private primengConfig: PrimeNGConfig) {}
ngOnInit(): void {
  this.email = sessionStorage?.getItem("Email") ?? "";
 
  let personName = sessionStorage.getItem("Email")?.split(".")[0];
  
  this.gfg = personName
  this.name =this.gfg.charAt(0).toUpperCase() + this.gfg.slice(1);

  console.log(this.gfg);

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
update() {
  this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
  this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
}






}
