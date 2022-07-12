import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuerpoModel } from '../modelos/cuerpoModel';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseURL : string;

  constructor(private http: HttpClient) { 
    this.baseURL = "https://sitetrack.net.nokia.com/sitetrack-api/api/v1/test/";
  }

  posts(token : any): Observable <any>{

    token = "eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOjEyNjYsImFjbHMiOiIxLjIuMSwxNC4xLjEsMTQuMS4yLDE0LjEuNCwxNC4xLjUsMTQuMS42LDAuNC4xLDAuNC4xLjEsMC40LjIsMC40LjIuMSwwLjQuMywwLjQuMy4xLDAuNC42LDAuNC42LjEsMC40LjcsMC40LjcuMSwwLjQuOSwwLjQuOS4xLDAuNC45LjIsMC40LjExLDAuNC4xMS4xLDAuNC4xMS4yLDAuNC4xMiwwLjQuMTMuMiwwLjQuMTQsMC40LjE0LjEsMC40LjE1LDAuNC4xNiwwLjQuMTcsMC40LjE3LjEsMC40LjE3LjIsMC41LDAuNiwwLjYuMSwwLjYuMS4xLDAuNywwLjcuMSwwLjgsMC44LjEsMC45LDAuMTEsMC4xMS4xLjEsMC4xNyIsInVhY2MiOjIsInVyb2wiOiJOSSIsImV4cCI6MTY2MDI1OTg4Mn0.vGqANf4BBPGQ-jDFRDtBTXY_srfm-1xzSqCsHzYNUXkRRaXNmaUUNits33QWl9ukKh5FSJIBPxokB3dA8CFTyA";
				
		let headers = new HttpHeaders({
			 'Content-Type':'application/json',
			 'Authorization': token,
       'Access-Control-Allow-Origin': '*'		
		  });
		  	  

		return this.http.get<CuerpoModel.CuerpoResponse>(this.baseURL +'list-wp-comment-posts', {headers});


	}



}
