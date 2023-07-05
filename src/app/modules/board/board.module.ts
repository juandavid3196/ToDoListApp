import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board.routing.module';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoardComponent,
    BoardComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    FormsModule
  ]
})
export class BoardModule { }
