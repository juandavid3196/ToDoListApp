import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: string): string {
    if(value=== '1'){
      return 'OPEN';
    }else if(value === '2'){
      return 'InPROGRESS';
    }else{
      return 'COMPLETED';
    }
  }

}
