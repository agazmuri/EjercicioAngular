import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuerpoModel } from '../modelos/cuerpoModel';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private baseURL : string;

  constructor(private http: HttpClient) { 
    this.baseURL = "https://sitetrack.net.nokia.com/sitetrack-api/";
  }

  getImagen(fileName : any): Observable <any>{
    console.log("RESP: " +  fileName);
		return this.http.get<CuerpoModel.Imagen>(`${this.baseURL}api/v1/images/dynamic/account?fileName=${fileName}`);
	}
}
