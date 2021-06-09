import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMonitorComponent } from './user-monitor/user-monitor.component';
import { ProjectMonitorComponent } from './project-monitor/project-monitor.component';
const routes: Routes = [
  {path:'users',component:UserMonitorComponent},
  {path:'projects',component:ProjectMonitorComponent},
  {path:'',redirectTo:'projects'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
