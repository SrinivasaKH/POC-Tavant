import { Component, OnInit } from '@angular/core'
import {IEmployees} from './Employees'
import { EmployeeService} from '../Employee/Employee.service'
@Component({
    //selector: 'pm-employee',
    moduleId:module.id,
    templateUrl: 'Employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

    pageTitle = 'Bench Employee Details'
    emplistFiltter: string ;
    datediffe: any;
     errorMessage:string;
   // startDateOfBench1: any = '12-05-2016';
    Employess: IEmployees[] ;
    // = [
    //     {
    //         "EmployeeID": 1,
    //         "name": "Sachin",
    //         "designation": "Software Engg",
    //         "skills": "dotnet and mvc",
    //         "Years": 2.5,
    //         "bench": "2 months",
    //         "startDateOfBench": '12-05-2016',
    //         "Training": "Angular 2"

    //     },
    //     {
    //         "EmployeeID": 2,
    //         "name": "Nikil",
    //         "designation": "Software Engg",
    //         "skills": "dotnet and mvc, sql",
    //         "Years": 2.5,
    //         "bench": "2 months",
    //         "startDateOfBench": '12-01-2016',
    //         "Training": "Angular 2"

    //     },

    //     {
    //         "EmployeeID": 3,
    //         "name": "Ganesh",
    //         "designation": "Software Engg",
    //         "skills": "Big data",
    //         "Years": 2.5,
    //         "bench": "1 month",
    //         "startDateOfBench": '12-19-2016',
    //         "Training": "Angular 2"

    //     },
    // ];

    constructor(private _empservice : EmployeeService) {

    }

    ngOnInit(): void {
        // var d = new Date();
        var today = new Date();
        this._empservice.getEmployees()
            .subscribe(Employess => this.Employess = Employess, error => this.errorMessage = <any>error)

    }

    datediff(date: Date, startDate: string) :any{
        console.log("Date", new Date( ));

        return  Math.floor((((new Date()).getTime()- (new Date(startDate)).getTime())/ (1000 * 3600 * 24)));
    }
}