import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board.routing.module';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { StatePipe } from 'src/app/pipes/state.pipe';
import { TaskService } from 'src/app/services/task.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { CategoryPipe } from 'src/app/pipes/category.pipe';

@NgModule({
  declarations: [
    BoardComponent,
    BoardComponent,
    TaskComponent,
    StatePipe,
    FilterPipe,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    FormsModule
  ],
  providers: [TaskService],
})
export class BoardModule { }
