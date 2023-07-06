import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../modules/board/task/Task.interface';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(values: Task[], args: string): Task[]{
    
    if(!args || args === 'All') return values;
    let result :Task[] = [];

    for(let value of values){
      if(value.state.indexOf(args)>-1){
        result = [...result,value];
      }
    }
    return result;
  }

}
