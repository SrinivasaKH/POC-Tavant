import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <div>
  <nav class ='nav navbar-default'>
   <div class ='container-fluid'>
   <a class ='navbar-brand'>{{pageTitle}}</a>
   <ul class ='nav navbar-nav'>
    <li><a [routerLink]="['/welcome']">Home</a></li>
    <li><a [routerLink]="['/Employees']">Employee List</a></li>
    <li><a [routerLink]="['/NewEmployee']">New Employee Enroll</a></li>
   </ul>
   </div>
  </nav> 
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
  </div>
  `
})
export class AppComponent { pageTitle = 'Bench Employee Details' }
