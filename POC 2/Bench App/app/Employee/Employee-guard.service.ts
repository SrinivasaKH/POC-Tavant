import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router'
@Injectable()
export class EmployeeGuardService implements CanActivate {

    constructor(private _router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
         let id:any = route.url[1].path
        //  let regexp =/^[0-9a-zA-Z]{4}$/ 
          // if(!regexp.test(id))
          if(isNaN(id))
          {
             alert('Invalid Empluyee Id')
             this._router.navigate['/Employees']
            return false;
        };
        return true;

    }

}