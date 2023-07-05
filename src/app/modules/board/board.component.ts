import { Component} from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent  {

  constructor(private TaskSvc : TaskService){}

  model = {
    id: uuidv4(),
    message : '',
    state: '1',
    date: this.getDate(),
  }

  openForm : boolean = false;

  newTask(): void {
    this.openForm = true;
  }

  exitForm(): void {
    this.openForm= false;
  }

  getDate(): string {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    const currentday = `${day}/${month}/${year}`;
    return currentday;
  }

  cleanModel(): void {
    this.model.message = '';
    this.model.state = '1';
  }

  onSubmit(value:any):void {
    this.TaskSvc.addTask(this.model)
    console.log(this.TaskSvc.getTasks());
    this.cleanModel();
  }
}
