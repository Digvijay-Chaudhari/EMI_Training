import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any[]): any {
    if(value.lenght === 0){
      return value;
    }
    else{
    return value.filter(function(search:any){
      return search.name.toLocaleLowerCase().indexOf(searchTerm) > -1;
    });
  }
}

}
