import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeecontrollerModule } from './Components/Module/employeecontroller/employeecontroller.module';
//EmployeeController


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmployeecontrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
