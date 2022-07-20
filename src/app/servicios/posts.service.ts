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
  
  getPosts(token : any): Observable <any>{
   
    const tok: string = this.cookieService.get('token');
    console.log(tok);
		let headers = new HttpHeaders({
			 'Content-Type':'application/json',
			 'Authorization': `Bearer ${tok}`,				
       'Access-Control-Allow-Origin': '*'		
		  });
		  	  

		return this.http.get<CuerpoModel.CuerpoResponse>(this.baseURL +'api/v1/test/list-wp-comment-posts', {headers});


	}



}
