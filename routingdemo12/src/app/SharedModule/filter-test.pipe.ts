import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTest'
})
export class FilterTestPipe implements PipeTransform {

  transform(value: any, idSearch: number): any {
    const resultArray = [];
    if(value.length === 0){
        return value;
    }
    else{
      for(const item of value){
        if(item.id === idSearch){
          resultArray.push(item);
        }
      }
      return resultArray
    }
  }

}
