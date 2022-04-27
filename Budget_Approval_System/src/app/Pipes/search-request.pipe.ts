import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRequest'
})
export class SearchRequestPipe implements PipeTransform {

  transform(value: any, searchBox: any): unknown {
    return this.filterData(value,searchBox);
  }

  filterData(value:any,searchBox:any){
    debugger
    if( searchBox==""){
      return value;
    }
    // this.filerData2(value,searchBox);
    var requestData=[];
    for(var i=0;i<value.length;i++){
      if((value[i].purpose).includes(searchBox)){
        requestData.push(value[i]);
  
        
      }
    }
    return requestData;
  
  }

}
