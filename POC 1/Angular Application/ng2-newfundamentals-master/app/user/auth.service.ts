import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class AuthService {
    currentUser: IUser;
    constructor(private http: Http) { }
    loginUser(userName: string, password: string) {

        // this.currentUser = {
        //     id: 1,
        //     userName: userName,
        //     fisrtName: "Jhon",
        //     lastName: "Popa"
        // }

        let headers = new Headers({ 'content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers });
        let logInfo = { userName: userName, password: password };
        // return this.http.post('/app/login', JSON.stringify(logInfo),
        return this.http.post('http://localhost:62157/api/Authentication/LoginCtrl', logInfo,
            options).map((resp: Response) => {
                this.currentUser = <IUser>resp.json().name;
                return resp.json();
            }).catch(error => {
                return Observable.of(false)
            })

    }

    isAunthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.fisrtName = firstName
        this.currentUser.lastName = lastName

    }

    savenewUser(username: string, password: string) {
        let headers = new Headers({ 'content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers });
        let logInfo = { userName: username, passWord: password };

        // this.http.post('http://localhost:62157/api/Authentication',logInfo,options)
        return this.http.post('http://localhost:62157/api/Authentication/NewLoginUser', logInfo, options)
            .map((resp: Response) => {
                this.currentUser = <IUser>resp.json().name;
                console.log()
                return resp.json()
            }).catch(error => {
                return Observable.of(false)
            })
    }

    getdurations() {
        let headers = new Headers({ 'content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:62157/api/Authentication/Getdurations', options)
            .map((resp: Response) => {
                let durationDetails = resp.json()
                //  console.log(durationDetails)
                return durationDetails;

            })



    }


    getlevel() {
        let header = new Headers({ 'content-Type': 'application/json' })
        let options = new RequestOptions({ headers: header })
        return this.http.get('http://localhost:62157/api/Authentication/Getlevels', options)
            .map((resp: Response) => {
                let getleveldetails = resp.json()
                console.log(getleveldetails)
                return getleveldetails;
            })
    }




}