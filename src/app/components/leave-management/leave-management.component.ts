import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SortEvent } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss'],
  providers: [MessageService]
})
export class LeaveManagementComponent {
  visibleSidebar: boolean = false;
  cities = [
    {name: 'Casual Leave', code: 'CL'},
    {name: 'Sick Leave', code: 'SL'},
   
];

  Leave: any = [];
  IsDisabled:boolean = true;
  value5 :Date = new Date();
  str:string = '';
  datePipeString : string| null = '';
  constructor(private http: HttpClient, private messageService: MessageService , private primengConfig : PrimeNGConfig) {
   
  }


  // getProductsSmall() {
  //   return this.http
  //     .get<any>('assets/JSON/products-small.json')
  //     .toPromise()
  //     .then((res) => <Product[]>res.data)
  //     .then((data) => {
  //       return data;
  //     });
  // }

  ngOnInit() {
    this.primengConfig.ripple = true;

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
getChangeAppDetails = (e:any) => {
 
console.log(e?.name);
  }
  raiseleave(reason:any, date:Date, multipleday: Date , form:any,modal: any,dropdownValue: any) 
   {
    debugger;
    //email of the user stored in sessionstorage
   const useremail = sessionStorage?.getItem("Email") ?? "";
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  
  
  let Singleday= `${month}-${day}-${year}`;
  //single-day
  let multipledays = multipleday?.getDate();
  let multiplemonth = multipleday?.getMonth();
  let multipleyear = multipleday?.getFullYear();
  
  
  let Multipleday = `${multipledays}-${multiplemonth}-${multipleyear}`;
  //multipledays

var diff = Math.abs(date.getTime() - multipleday?.getTime());
var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
//type of leaves
var leavereq = dropdownValue.value.name;

console.log(leavereq);
//short the reason
var smallreason =  reason.substring(0, 20) + '...';
if(multipleday == undefined)
  {
    diffDays = 1;
    Multipleday = Singleday;

  }
  //details for leave-management
    const details = {  
      LeaveType :leavereq,
      SmallReason: smallreason,
      Reason: reason,
      SingleDate: Singleday,
      Ending: Multipleday,
      days: diffDays,
      req_sent: 'Neeraj Shridhar',
      Approved: "",
      Status: "Pending",
      email: useremail

      

      }
      
   
    
  
    this.Leave.push(details)
    
    //to reset the form after raising the request for leave
    form.reset();
    console.log(modal);
    console.log(details);
  
   

this.OpenPopup();
  }
  OpenPopup() {
    debugger; 
    this.messageService.add({severity:'success',  detail: 'Your Leave Request  Submitted your successfully'});
   }
  //cancel the leave request from the grid
  RequestCancel() {
    console.log("Request ");
  }
  //to reset the modal from cancel and Cross button
  CancelModal(form:any) {
    form.reset();
    this.IsDisabled = true;
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
