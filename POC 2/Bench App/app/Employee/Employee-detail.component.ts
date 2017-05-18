import { Component, OnInit } from '@angular/core'
import { IEmployees } from './Employees'
import { ActivatedRoute, Router } from '@angular/router'
import { EmployeeService } from './Employee.service'
@Component({
    templateUrl: 'app/Employee/Employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit {
    pageTitle: string = 'Employee Detail'
    employee: IEmployees[];

    errorMessage: string;
    constructor(private _route: ActivatedRoute, private _router: Router, private _empservice: EmployeeService) {

    }
    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.pageTitle += `:${id}`;
        var today = new Date();
        this._empservice.getEmployeeDetail(id)
            .subscribe(Employees => this.employee = Employees, error => this.errorMessage = <any>error)
    }


    onBack(): void {
        this._router.navigate(['/Employees']);
    }


    datediff(date: Date, startDate: string): any {
        console.log("Date", new Date());

        return Math.floor((((new Date()).getTime() - (new Date(startDate)).getTime()) / (1000 * 3600 * 24)));
    }
}

