import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeecontrollerComponent } from '../../EmployeeController/Components/add-edit-employeecontroller/add-edit-employeecontroller.component';
import { EmployeecontrollerComponent } from '../../EmployeeController/Components/employeecontroller/employeecontroller.component';

const routes: Routes = [{path:'' , component:EmployeecontrollerComponent},
{path:'add-emp' , component:AddEditEmployeecontrollerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeecontrollerRoutingModule { }
