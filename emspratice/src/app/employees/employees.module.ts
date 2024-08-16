import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {MatListModule} from '@angular/material/list';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchPipe } from './employeePipes/search.pipe';
import { FilterPipe } from './employeePipes/filter.pipe';
@NgModule({
  declarations: [
    EmployeesComponent,
    AddComponent,
    EditComponent,
    EmployeelistComponent,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule

  ]
})
export class EmployeesModule { }
