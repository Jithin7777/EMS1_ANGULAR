import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allEmployees:any[],searchStatus:string): any{
   const result:any=[]
   if(!allEmployees || !searchStatus){
    return allEmployees
  
  }else{
    allEmployees.forEach((item:any)=>{
      if(item.status.includes(searchStatus)){
        result.push(item)
      }
    })
    return result
  }
}

}
