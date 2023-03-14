import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private httpclient:HttpClient ) { }

  sendLeaveEmail(leaveDetails:any) {
    return this.httpclient.post<any>("http://localhost:1880/sendLeaveEmail" , leaveDetails )
  }
}
