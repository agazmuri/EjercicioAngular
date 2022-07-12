import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: any;
  password: any;


  constructor(private router: Router,
    public fb: FormBuilder,
    private _loginService: LoginService) { 
      this.loginForm = this.fb.group({
        login: [null, [Validators.required]],
        passWord: [null, [Validators.required]]
      });
    }

  ngOnInit(): void {
  }

  iniciarSesion() {
   
        
        let auth = {
          'username': this.loginForm.value.login,         
          'password': this.loginForm.value.passWord
        }

         
        this._loginService.login(auth).subscribe((res) => {
          let submintLogin: any = res;
          
          // let json = JSON.stringify("TOKEN : " + res.token);
          // console.log("SU TOKEN ES: " +json);

                   
          this.router.navigate(["listadoPosts"]);
          

          
        });
      
  }

}
