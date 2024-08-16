import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allEmployees:any[],searchKey:string): any {
   const result:any=[]
   if(!allEmployees || !searchKey){
    return allEmployees
   }
   else{
    allEmployees.forEach((item:any)=>{
      if(item.username.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
result.push(item)
      }
    })
    return result
   }
  }

}
