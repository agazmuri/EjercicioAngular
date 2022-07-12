import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL : string;

  constructor(private http: HttpClient) { 
    this.baseURL = "https://sitetrack.net.nokia.com/sitetrack-api/api/v1/auth/";
  }


  login(user: any):Observable<any> {
    
    return this.http.post(this.baseURL +"login", user);      
    
  }
}


