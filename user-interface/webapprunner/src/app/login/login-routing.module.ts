import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninScreenComponent } from './signin-screen/signin-screen.component';

const routes: Routes = [
  {path:'signin',component:SigninScreenComponent},
  {path:'',redirectTo:'signin'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
