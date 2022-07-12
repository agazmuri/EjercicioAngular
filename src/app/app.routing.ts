import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoPostsComponent } from './componentes/listado-posts/listado-posts.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';



const appRoutes : Routes = [
    { path: '', component: LoginComponent },
    { path: 'listadoPosts', component: ListadoPostsComponent},    
    { path: '**', component: HomeComponent}

];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);