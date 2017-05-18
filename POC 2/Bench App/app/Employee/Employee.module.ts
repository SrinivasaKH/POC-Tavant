import { NgModule } from '@angular/core';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from './Employee.service';
import { CommonModule } from '@angular/common'

import { FormsModule } from '@angular/forms'
import { EmployeeFilterPipe } from './Employee-filtter.pipe'
import { EmployeeDetailComponent } from './Employee-detail.component'

import { RouterModule } from '@angular/router'
import { EmployeeGuardService } from './Employee-guard.service'
import { NewEmployeeRegistration } from './NewEmployeeRegistration.component'

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    
    RouterModule.forChild([
      { path: 'Employees', component: EmployeeListComponent },
      { path: 'Employee/:id', canActivate: [EmployeeGuardService], component: EmployeeDetailComponent },
      { path: 'NewEmployee', component: NewEmployeeRegistration }

    ])],
  declarations: [

    EmployeeListComponent,
    EmployeeFilterPipe,
    EmployeeDetailComponent,
    NewEmployeeRegistration

  ],

  providers: [EmployeeGuardService, EmployeeService]

})
export class EmployeeModule { }