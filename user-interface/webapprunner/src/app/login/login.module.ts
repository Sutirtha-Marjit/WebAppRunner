import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SigninScreenComponent } from './signin-screen/signin-screen.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SigninScreenComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { constructor(){
  alert('Came!');
}}
