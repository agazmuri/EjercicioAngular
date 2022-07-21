import { Component, OnInit, Input } from '@angular/core';
import { CuerpoModel } from 'src/app/modelos/cuerpoModel';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { PostsService } from 'src/app/servicios/posts.service';
import { LoginComponent } from '../../../login/componentes/login/login.component';

@Component({
  selector: 'app-listado-posts',
  templateUrl: './listado-posts.component.html',
  styleUrls: ['./listado-posts.component.sass']
})


export class ListadoPostsComponent implements OnInit {

  @Input()
  token: string = "";

  router: any;
  public listadoPosts: any = [];
  public listadoImagenes: any = [];

  constructor(private _postsService: PostsService, private _imagenService: ImagenService) {

  }

  ngOnInit(): void {
    this.listado();
  }

  listado() {

    this._postsService.getPosts().subscribe((res) => {




      for (let listado of res.content) {
        if(listado != null){
          this.listadoPosts.push(listado);
        }
        
      }
      
      for (let listado of res.content) {              
        
        if(listado.imageName != null){
          this._imagenService.getImagen(listado.imageName).subscribe((res) => {
            console.log("RESP: " +  res);
            this.listadoImagenes.push(res);             
          });
        }
        

      }
          
      // for (let documento of res.content.imageName) {
      //   console.log("IMAGEN : " +documento);
      // }


      // let doc = {
      //   fileName: codigo
      // };

      // this._imagenService.getImagen(res.content.imageName).subscribe((res) => {

      //   let json = JSON.stringify(res);
      //   console.log("IMAGEN : " +json);                     


      // });


    });



  }

  cerrarSesion(){
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }    
  }

}
