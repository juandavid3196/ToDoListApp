import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../modules/board/task/Task.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Task[], arg: string): Task[]{
    if(!arg) return values;
    let result : Task[] = [];
    for(const value of values){
      if(value.message.toLowerCase().indexOf(arg.toLowerCase())>-1){
        result = [...result,value];
      }
    }
    return result;
  }

}
