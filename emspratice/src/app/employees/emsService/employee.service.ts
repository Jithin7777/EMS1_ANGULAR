import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 base_url='http://localhost:8000'
  constructor(private http:HttpClient) { }

  //api to add employee
  addEmployee(empData:any){
   return this.http.post(`${this.base_url}/employees`,empData)
  }

//get all employees

getAllEmployees(){
  return this.http.get(`${this.base_url}/employees`)
}

deleteEmployee(id:any){
return this.http.delete(`${this.base_url}/employees/${id}`)
}

getSingleEmployee(id:any){
 return this.http.get(`${this.base_url}/employees/${id}`)
}

updateEmployee(id:any,bodydata:any){
  return this.http.put(`${this.base_url}/employees/${id}`,bodydata)
}


}
