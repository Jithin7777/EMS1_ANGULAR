import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  //dashboard -employee list
  { path: '', component: EmployeesComponent },
  // dashboard/employee-add
  { path: 'employee-add', component: AddComponent },
  //edit dashboard/employee-edit/4
  { path: 'employee-edit/:id', component: EditComponent },
  //employee list
  {path:'all-employees',component:EmployeelistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
