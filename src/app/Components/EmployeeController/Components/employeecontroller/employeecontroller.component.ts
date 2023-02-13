
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmployeecontrollerComponent } from '../add-edit-employeecontroller/add-edit-employeecontroller.component';

@Component({
  selector: 'app-employeecontroller',
  templateUrl: './employeecontroller.component.html',
  styleUrls: ['./employeecontroller.component.scss']
})
export class EmployeecontrollerComponent {

constructor(private _dialog:MatDialog){}
  openaddeditemployeeform(){
    this._dialog.open(AddEditEmployeecontrollerComponent)
  }
}



