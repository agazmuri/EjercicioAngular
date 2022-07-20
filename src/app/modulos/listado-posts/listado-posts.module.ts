import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPostsComponent } from './componentes/listado-posts/listado-posts.component';
import { ImagenAleatoriaComponent } from './componentes/imagen-aleatoria/imagen-aleatoria.component';



@NgModule({
  declarations: [
    ListadoPostsComponent, 
    ImagenAleatoriaComponent  ],
  imports: [
    CommonModule
  ]
})
export class ListadoPostsModule { }
