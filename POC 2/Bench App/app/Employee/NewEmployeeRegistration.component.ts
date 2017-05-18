import { Component, OnInit } from '@angular/core'
import { IEmployees } from './Employees'
import { EmployeeService } from '../Employee/Employee.service'

@Component({
    moduleId: module.id,
    templateUrl: 'NewEmployeeRegistration.component.html'
})
export class NewEmployeeRegistration implements OnInit {
    pageTitle = 'New Employee Enroll'
    errorMessage: any;
    Employess: IEmployees[];
    Emp: IEmployees = {
        EmployeeID: '',
        name: '',
        designation: '',
        skills: '',
        Years: 0,
        bench: '',
        startDateOfBench: '',
        Training: ''
    };

    constructor(private _empservice: EmployeeService) {

    }

    ngOnInit(): void {

        var today = new Date();
        this._empservice.getEmployees()
            .subscribe(Employess => this.Employess = Employess, error => this.errorMessage = <any>error)

    }

    createNewEmployee(): void {

        this._empservice.createNewEmployee(this.Emp).subscribe(Emp => { Emp = Emp, this._empservice.getEmployees().subscribe(Employess => this.Employess = Employess, error => this.errorMessage = <any>error) }, error => this.errorMessage = <any>error)
    }

    getEmployeeDetail(emp: IEmployees): void {

        let empCopy = Object.assign({
            EmployeeID: '',
            name: '',
            designation: '',
            skills: '',
            Years: 0,
            bench: '',
            startDateOfBench: '',
            Training: ''
        }, emp);
        this.Emp = empCopy;

    }

    cancelEmp(): void {

        this.Emp = {
            EmployeeID: '',
            name: '',
            designation: '',
            skills: '',
            Years: 0,
            bench: '',
            startDateOfBench: '',
            Training: ''
        }
    }

    updateEmp(): void {
        this._empservice.updateEmployeeDetail(this.Emp).subscribe(
            emp => { this._empservice.getEmployees().subscribe(Employes => this.Employess = Employes, error => this.errorMessage = <any>error) },
            error => this.errorMessage = <any>error)

        this.cancelEmp();

    }

    deleteEmp(emp: IEmployees): void {
        this._empservice.deleteEmployeeDetail(emp).subscribe(
            emp1 => { this._empservice.getEmployees().subscribe(Employes => this.Employess = Employes, error => this.errorMessage = <any>error) },
            error => this.errorMessage = <any>error)
    }

}