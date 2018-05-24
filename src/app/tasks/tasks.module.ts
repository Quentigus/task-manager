import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { MaterialModule } from '../material.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TasksRoutingModule
  ],
  declarations: [ ListComponent ]
})
export class TasksModule { }
