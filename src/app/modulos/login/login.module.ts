import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
