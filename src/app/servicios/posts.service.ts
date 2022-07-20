import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuerpoModel } from '../modelos/cuerpoModel';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  private baseURL : string;  
   

  constructor(private http: HttpClient, private cookieService: CookieService ) { 
    this.baseURL = "https://sitetrack.net.nokia.com/sitetrack-api/";
    
  }
  
  getPosts(): Observable <any>{
       				  	  
		return this.http.get<CuerpoModel.CuerpoResponse>(this.baseURL +'api/v1/test/list-wp-comment-posts');


	}



}
