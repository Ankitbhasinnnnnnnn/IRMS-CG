import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SortEvent } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id?: string;
  code?: string;
  SingleDate?: string;
  Reason?: string;
  MultipleDays?: string;
  quantity?: number;
  inventoryStatus?: string;
  Month?: string;
  image?: string;
  days?: number;
  date3?: Date;
  
}
@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss'],
})
export class LeaveManagementComponent {
  visibleSidebar: boolean = false;
  products1: Product[] = [];
  Leave: any = [];
  IsDisabled:boolean = true;
  value5 :Date = new Date();
  str:string = '';
  datePipeString : string| null = '';
  constructor(private http: HttpClient ) {
   
  }

  getProductsSmall() {
    return this.http
      .get<any>('assets/JSON/products-small.json')
      .toPromise()
      .then((res) => <Product[]>res.data)
      .then((data) => {
        return data;
      });
  }

  ngOnInit() {
    this.getProductsSmall().then((data) => (this.products1 = data));
  }
  onChange = (e:any) => {
    console.log(e.target.value);
    if(e.target.value == 'on') {
        console.log("enabled");
        this.IsDisabled = false;
    }
  
  }
  onSingle = (e:any) => {
    if(e.target.value == 'on') {
      this.IsDisabled = true;
    }
  }
  raiseleave(reason:any, date:Date,multipleday: Date) 
   {
    
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  //month of leave
  var actualmonth = date.toLocaleString('default', { month: 'long' });

  let Singleday= `${month}-${day}-${year}`;
  //single-day
  let multipledays = multipleday?.getDate();
  let multiplemonth = multipleday?.getMonth();
  let multipleyear = multipleday?.getFullYear();
  
  
  let Multipleday = `${multipledays}-${multiplemonth}-${multipleyear}`;
  //multipledays

var diff = Math.abs(date.getTime() - multipleday?.getTime());
var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
//no of days

if(multipleday == undefined)
  {
  diffDays = 1;
  Multipleday = '';

   }
    const details = {
      Month:  actualmonth,
      Reason: reason,
      SingleDate: Singleday,
      Ending:Multipleday,
      days: diffDays,

          }
   
    
    console.log(this.Leave);
    this.products1.push(details)
    
  }

  // customSort(event: SortEvent) {
  //     event.data.sort((data1, data2) => {
  //         let value1 = data1[event.field];
  //         let value2 = data2[event.field];
  //         let result = null;

  //         if (value1 == null && value2 != null)
  //             result = -1;
  //         else if (value1 != null && value2 == null)
  //             result = 1;
  //         else if (value1 == null && value2 == null)
  //             result = 0;
  //         else if (typeof value1 === 'string' && typeof value2 === 'string')
  //             result = value1.localeCompare(value2);
  //         else
  //             result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

  //         return (event.order * result);
  //     });
  // }
}
