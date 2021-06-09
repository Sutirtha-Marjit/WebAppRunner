import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProjectMonitorComponent } from './project-monitor/project-monitor.component';
import { UserMonitorComponent } from './user-monitor/user-monitor.component';


@NgModule({
  declarations: [
    ProjectMonitorComponent,
    UserMonitorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
