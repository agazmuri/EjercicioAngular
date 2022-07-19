import { Component, OnInit, Input } from '@angular/core';
import { CuerpoModel } from 'src/app/modelos/cuerpoModel';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { PostsService } from 'src/app/servicios/posts.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-listado-posts',
  templateUrl: './listado-posts.component.html',
  styleUrls: ['./listado-posts.component.css']
})


export class ListadoPostsComponent implements OnInit {

  @Input()  
  token: string = "";

  router: any;
  public listadoPosts: any = [];

  constructor(private _postsService: PostsService, private _imagenService: ImagenService) { 
   
  }

  ngOnInit(): void {
    this.listado();
  }

  listado() {              
     
    this._postsService.getPosts(this.token).subscribe((res) => {
            

      
         
          for (let noEnrolados of res.content) {
            this.listadoPosts.push(noEnrolados);
          }

      // let json = JSON.stringify(res.content);
      // console.log("DATOS : " +json);
      // let json2 = JSON.stringify(res.content.imageName);         
      // console.log("IMAGEN : " +json2);

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

}
