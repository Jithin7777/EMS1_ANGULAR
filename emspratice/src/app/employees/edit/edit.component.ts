import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../emsService/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any=''
  empData:any={}
constructor(private ar:ActivatedRoute,private es:EmployeeService, private route:Router){

}

ngOnInit(): void {
  this.ar.params.subscribe((data:any)=>{
    // console.log(data.id);
    this.id=data.id
    // console.log(this.id);
    this.es.getSingleEmployee(this.id).subscribe({
      next:(result:any)=>{
this.empData=result
console.log(this.empData);

      },
      error:(result:any)=>{

      }
    })
    
  })
}

edit(){
  this.es.updateEmployee(this.id,this.empData).subscribe({
    next:(result:any)=>{
      alert("Employee updated successfully")
      this.route.navigateByUrl('/dashboard/all-employees')
    },
    error:(result:any)=>{
      alert("update failed")
    }
  })
}

}
