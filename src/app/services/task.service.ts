import { Injectable } from '@angular/core';
import {Task} from "../modules/board/task/Task";

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  tasks : Task[] = [];
  constructor() { }  

  getTasks() : Task[] {
      return this.tasks;
  } 

  addTask(task:Task) : void {
    this.tasks.push(task);
  }

  updateTask(id:string,task:Task): void{
    const element = this.tasks.find((task:Task) => task.id === id);
    if(element){
      const indice = this.tasks.indexOf(element);
      this.tasks[indice] = task;
    }
  }

  deleteTask(id:string): void {
    this.tasks =  this.tasks.filter((task:Task)=>task.id !== id);
  }
}
