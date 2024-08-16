import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../emsService/employee.service';

export interface Employee {
  userID: number;
  username: string;
  email: string;
  status: string;
}

const EMPLOYEE_DATA: Employee[] = [
  // { UserID: 1, UserName: 'John Doe', Email: 'john.doe@example.com', Status: 'Active' },
  // { UserID: 2, UserName: 'Jane Smith', Email: 'jane.smith@example.com', Status: 'Inactive' },
  // Add more data as needed
];

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  // displayedColumns: string[] = ['UserID', 'UserName', 'Email', 'Status','Empty'];
  dataSource = new MatTableDataSource(EMPLOYEE_DATA);
 
  allEmployess:any=[]
  //  deletedEmployee:any=''
  searchTerm: string = '';
  filterString:string=''
  constructor(private es:EmployeeService ) { }

  ngOnInit(): void {
    this.listOfEmployees()
  }

listOfEmployees(){
this.es.getAllEmployees().subscribe({
  next:(result:any)=>{
    //store data in class attribute
this.allEmployess=result
console.log(this.allEmployess);

  },
  error:(result:any)=>{
    alert('employee added failed')
  }
})
}

deleteEmployee(id:any){
    this.es.deleteEmployee(id).subscribe({
  next:(result:any)=>{
// this.deleteEmployee=result

  alert(`employee  deleted`);

this.listOfEmployees()
  },
  error:(result:any)=>{
    alert('Delete FAILED')
  }
})
}

filteredString(data:any){
 this.filterString=data
}

}
