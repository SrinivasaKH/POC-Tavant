import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'

import {EmployeeModule} from './Employee/Employee.module'
import { WelcomeComponent } from './Home/Welcome.component'
import { RouterModule } from '@angular/router'
//import { CustomFormsModule } from 'ng2-validation'
@NgModule({

  imports: [
    BrowserModule,
    
    EmployeeModule,
    HttpModule, RouterModule.forRoot([
     
      { path: 'Welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'Welcome', pathMatch: 'full' }
    ])],
  declarations: [
    AppComponent,
    
    WelcomeComponent
  ],

 
  bootstrap: [AppComponent]
})
export class AppModule { }
