import { Injectable,OnInit } from '@angular/core';
import {Task} from "../modules/board/task/Task.interface";

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  tasks : Task[] = [];
  
  constructor() {
    this.initializeTasks();
  }

  private initializeTasks(): void {
    const storedArray = localStorage.getItem("tasks");
    if (storedArray) {
      this.tasks = JSON.parse(storedArray);
    }
  }

  getTasks() : Task[] {
      this.initializeTasks();
      return this.tasks;   
  } 

  addTask(task:Task) : void {
    this.tasks.unshift(task);
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }

  updateTask(ObjectTask:Task): void{
    const element = this.tasks.find((task:Task) => task.id === ObjectTask.id);
    if(element){
      const indice = this.tasks.indexOf(element);
      this.tasks[indice] = ObjectTask;
    }
    this.updateLocalStorage();
  }

  deleteTask(id:string): void {
    this.tasks =  this.tasks.filter((task:Task)=>task.id !== id);
    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
