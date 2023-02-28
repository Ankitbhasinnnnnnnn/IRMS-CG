import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
gfg:any = '';
name: string = '';

ngOnInit(): void {
  let personName = sessionStorage.getItem("Email")?.split(".")[0];

  this.gfg = personName
  this.name =this.gfg.charAt(0).toUpperCase() + this.gfg.slice(1);

  console.log(this.gfg);
}




}
