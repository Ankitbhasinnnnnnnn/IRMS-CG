import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerfiyUser {
  constructor(private httpclient: HttpClient) { }

  VerifyOtp(userdata:any): Observable<any> {
    debugger;
    return this.httpclient.post<any>("http://localhost:1880/verify" , userdata );
  }
}
