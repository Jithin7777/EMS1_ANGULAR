import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../emsService/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit  {
 
addform=this.fb.group({
  username:['',[Validators.required]],
  email:['',[Validators.required]],
  status:['',[Validators.required]]
})

 constructor(private fb:FormBuilder,private es:EmployeeService,private rout:Router ){}
 
 
  ngOnInit(): void {
    
  }

  add(){
    if(this.addform.valid){
      var path=this.addform.value  
      // console.log(path.username);
      // console.log(path.email);
      // console.log(path.status);

      //body data
     const employeeData={
      id:"",
        username:path.username,
        email:path.email,
        status:path.status
     } 
     this.es.addEmployee(employeeData).subscribe({
      next:(result:any)=>{
        alert('new user added')
        this.addform.reset()
        this.rout.navigateByUrl('/dashboard/all-employees')
      },
      error:(result:any)=>{
        alert('user add faile')
      }
     })
    
    }else{
      alert('please fill all data')
    }
  
  
  }

}

