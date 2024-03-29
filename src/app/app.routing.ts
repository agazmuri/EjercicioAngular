import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoPostsComponent } from './modulos/listado-posts/componentes/listado-posts/listado-posts.component';
import { LoginComponent } from './modulos/login/componentes/login/login.component';
import { UserGuardGuard } from './user-guard.guard';



const appRoutes : Routes = [
    { path: '', component: LoginComponent },
    { path: 'listadoPosts', component: ListadoPostsComponent, canActivate : [UserGuardGuard] },    
    { path: '**', component: LoginComponent}

];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);