import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor(){}

  @Input() message !: string;
  @Input() state !: string;
  @Input() date !: string;
  @Input() id !: string;
  @Output() dataEvent =  new EventEmitter<string>();
  @Output() dataUpdate =  new EventEmitter<Object>();

  getColor(value:String): string{
    if(value === '1'){
      return 'rgb(59, 229, 59)';
    }else if (value === '2'){
      return 'rgb(255 134 45)';
    }else {
      return 'rgb(0 49 255)';
    }
  }

  deleteTask(id:string): void {
    this.dataEvent.emit(id);
  }

  updateTask(id:string,state:string,message:string,date:string):void {
    const taskUpdate = {
      id,
      message,
      state,
      date
    };
    this.dataUpdate.emit(taskUpdate);
  }

}
