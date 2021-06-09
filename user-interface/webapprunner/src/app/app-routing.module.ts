import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path:'auth', loadChildren: ()=> import('./login/login.module').then( m=> m.LoginModule)},
  {path:'admin', loadChildren: ()=> import('./admin/admin.module').then( m=> m.AdminModule)},
  {path:'',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
