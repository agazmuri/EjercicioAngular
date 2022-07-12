import { Component, OnInit, Input } from '@angular/core';
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


  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    this.listado();
  }

  listado() {              
     
    this._postsService.posts(this.token).subscribe((res) => {
            
      let json = JSON.stringify("TOKEN : " + res.content);
      console.log("DATOS : " +json);                     

      
    });
  
}

}
