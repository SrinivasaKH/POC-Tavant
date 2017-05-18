import { PipeTransform, Pipe } from '@angular/core'
import { IEmployees } from './Employees'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Pipe({
    name: 'Employeefilter'
})
export class EmployeeFilterPipe implements PipeTransform {

    transform(value: IEmployees[], filterBy: string): IEmployees[] {

        //filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        //return filterBy ? value.filter((employee: IEmployees) => employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1 || employee.EmployeeID.toLocaleLowerCase().indexOf(filterBy)!==-1 || employee.skills.toLocaleLowerCase().indexOf(filterBy) !==-1) : value;
       
         filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;        
         return  filterBy ? value.filter((employee: IEmployees) => employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1 || employee.EmployeeID == filterBy || employee.skills.toLocaleLowerCase().indexOf(filterBy) !==-1) : value;
           
  

    }

}