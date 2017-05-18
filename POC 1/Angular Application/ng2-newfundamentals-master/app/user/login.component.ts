import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
    // selector: '',
    templateUrl: './app/user/login.Component.html',
    styles: [`
     em{float:right;color:#E05C65;padding-left:10px}
    `]

})
export class LoginComponent {
    loginInvalid = false;
    constructor(private authservice: AuthService, private router: Router) { }

    login(formValues) {
        this.authservice.loginUser(formValues.userName, formValues.password)
            .subscribe(resp => {
                console.log(resp);
                if (!resp) {
                    this.loginInvalid = true;
                }
                else {
                     this.router.navigate(['events'])
                  //  this.router.navigate(['user/profile'])
                }
            })
        //console.log(formvalues)


    }
    cancel() {
        this.router.navigate(['events'])
    }
}