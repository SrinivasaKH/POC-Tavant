import { Injectable } from '@angular/core';
import { IEmployees } from './Employees';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

@Injectable()
export class EmployeeService {
    //  private empUrl='http://localhost:64936/api/home?abcs';//'api/Employeelist/Employeelist.json'
    // private empUrl='http://localhost:55443/api/Math';//'http://localhost:55443/Web/Empdata.json'
  //  private empUrl = 'api/Employeelist/Employeelist.json'
   //new service
   private empUrl='http://localhost:53629/api/AppUser'
    constructor(private _http: Http) {

    }
    getEmployees(): Observable<IEmployees[]> {
        
       
       let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json' });
       let options = new RequestOptions({ headers: headers });

        return this._http.get(this.empUrl)
            .map((reponse: Response) => <IEmployees[]>reponse.json())
            .do(data => console.log('All :' + JSON.stringify(data)))
            .catch(this.handlError);

    }

    getEmployeeDetail(Id: any): Observable<IEmployees[]> {
        //    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json' });
        //    let options = new RequestOptions({ headers: headers });

            return this._http.get(this.empUrl)
            .map((reponse: Response) => <IEmployees[]>reponse.json().find(function (ID: IEmployees) { if (ID.EmployeeID == Id) return ID; }))
            .do(data => console.log('All :' + JSON.stringify(data)))
            .catch(this.handlError);

    }

    private handlError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error')
    }


    createNewEmployee(body: Object): Observable<IEmployees[]> {

        debugger;
        let bodyString = JSON.stringify(body); 
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.empUrl, bodyString, options)
            .map((response: Response) => <IEmployees[]>response.json())
            .do(response => console.log(response));

    }

    updateEmployeeDetail(body:Object):Observable<IEmployees[]>{
        console.log(body);  
        let bodyString = JSON.stringify(body);   
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
     
        //return this._http.put(`${this.empUrl}/${body['EmployeeID']}`,bodyString,options)
         return this._http.put(this.empUrl+"?id="+body['EmployeeID'],bodyString,options)
        .map((response: Response) => <IEmployees[]>response.json())
        .do(response => console.log(response))
        
    }
    deleteEmployeeDetail(body:Object):Observable<IEmployees[]>{
        console.log(body);  
       
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

         return this._http.delete(this.empUrl+"?id="+body['EmployeeID'],options)
        .map((response: Response) => <IEmployees[]>response.json())
        .do(response => console.log(response))
    }

}