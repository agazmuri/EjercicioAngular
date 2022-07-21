import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // console.log    console.log("start");
    const token: string = this.cookieService.get('token');

    let req = request;

    if (!token) {
      return next.handle(req);
    }

    const headers = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)

      
    });

    //console.log("end", { token, headers, request });
    return next.handle(headers);  }
}
