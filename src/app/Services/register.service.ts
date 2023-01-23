import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpclient: HttpClient) { }

  registerUser(userdata:any): Observable<any> {
    debugger;
    return this.httpclient.post<any>("http://localhost:1880/register" , userdata );
  }
}
