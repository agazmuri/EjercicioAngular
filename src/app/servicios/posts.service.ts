import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuerpoModel } from '../modelos/cuerpoModel';
import { JwtInterceptorInterceptor } from '../jwt-interceptor.interceptor';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  private baseURL : string;  
  private jwt : any;
  
  

  constructor(private http: HttpClient, private cookieService: CookieService ) { 
    this.baseURL = "https://sitetrack.net.nokia.com/sitetrack-api/";
    
  }
  

  getPosts(token : any): Observable <any>{

    //token = "eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOjEyNjYsImFjbHMiOiIxLjIuMSwxNC4xLjEsMTQuMS4yLDE0LjEuNCwxNC4xLjUsMTQuMS42LDAuNC4xLDAuNC4xLjEsMC40LjIsMC40LjIuMSwwLjQuMywwLjQuMy4xLDAuNC42LDAuNC42LjEsMC40LjcsMC40LjcuMSwwLjQuOSwwLjQuOS4xLDAuNC45LjIsMC40LjExLDAuNC4xMS4xLDAuNC4xMS4yLDAuNC4xMiwwLjQuMTMuMiwwLjQuMTQsMC40LjE0LjEsMC40LjE1LDAuNC4xNiwwLjQuMTcsMC40LjE3LjEsMC40LjE3LjIsMC41LDAuNiwwLjYuMSwwLjYuMS4xLDAuNywwLjcuMSwwLjgsMC44LjEsMC45LDAuMTEsMC4xMS4xLjEsMC4xNyIsInVhY2MiOjIsInVyb2wiOiJOSSIsImV4cCI6MTY2MDc3Njk5Mn0._axmSQVAuGzYizKPTbtuvDgNX1mHWSdgu7JA6opq79Gsb5wclyqwE2Qi3J2OCfePiYUPHORzee8K2AhZcptbiw";
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
