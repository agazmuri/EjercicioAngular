import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListadoPostsComponent } from './componentes/listado-posts/listado-posts.component';
import { HomeComponent } from './componentes/home/home.component';
import { routing, appRoutingProviders} from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPostsComponent,
    HomeComponent,
    LoginComponent   
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [appRoutingProviders, CookieService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
