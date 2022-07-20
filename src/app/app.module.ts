import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';
import { LoginModule } from './modulos/login/login.module';
import { ListadoPostsModule } from './modulos/listado-posts/listado-posts.module';


@NgModule({
  declarations: [
    AppComponent     
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    LoginModule,
    ListadoPostsModule
  ], 
  providers: [appRoutingProviders, CookieService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
