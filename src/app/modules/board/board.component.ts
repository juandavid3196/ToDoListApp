import { Component, OnInit} from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './task/Task.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private TaskSvc : TaskService){}

  ngOnInit(): void {
    this.tasks = this.TaskSvc.getTasks();
  }

  searchValue !: string;
  categoryValue : string = 'All'
  tasks !: Task[];
  btnSubmitValue : string = 'Save';
  btnOperation: boolean = true;

  model:Task = {
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
    this.model.id = uuidv4();
    this.model.message = '';
    this.model.state = '1';
    this.model.date = this.getDate();
  }

  reloadTask(): void {
    this.tasks = this.TaskSvc.getTasks();
  }

  onSubmit():void {
    if(this.btnOperation){
      this.TaskSvc.addTask(this.model);
    }else {
      this.TaskSvc.updateTask(this.model);
    }
    this.cleanModel();
    this.reloadTask();
    this.exitForm();
    this.btnOperation = true;
    this.btnSubmitValue = 'Save';
    
  }

  onDeleteTask(data:string):void{
    this.TaskSvc.deleteTask(data);
    this.reloadTask();
  }

  onUpdateTask(data:any):void{
    this.newTask();
    this.model = {...data};
    this.btnSubmitValue = 'Update';
    this.btnOperation = false;
  }

   verifyMessageExtend() :any{
    if(this.model.message && this.model.message.length > 60) return true;
   }

}
