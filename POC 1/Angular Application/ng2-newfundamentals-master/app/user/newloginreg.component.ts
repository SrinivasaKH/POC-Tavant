import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../app/user/auth.service'
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service'
@Component({

    templateUrl: '../app/user/newloginreg.component.html',
    styles: [`
  em{float:right; color:#E05c65; padding-left: 10px}
  .error input{background-color:#E3C3C5}
  .error ::-webkit-input-placeholder{color:#999;}
  .error :: -moz-placeholder{color:#999}
  .error :: -moz-placeholder{color:#999}
  .error :: ms-input-placeholder{color:#999}
  `]
})
export class NewLoginRegistration implements OnInit {
    loginRegForm: FormGroup
    public userName: FormControl;
    public passWord: FormControl;
    public confirmPassword: FormControl;
    constructor(private route: Router, private authservice: AuthService, @Inject(TOASTR_TOKEN) private toastr: Toastr) { }
    ngOnInit() {


        this.userName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*'), Validators.minLength(3), Validators.maxLength(5)])
        this.passWord = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)])
        this.confirmPassword = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)])

        this.loginRegForm = new FormGroup({
            userName: this.userName,
            passWord: this.passWord,
            confirmPassword: this.confirmPassword

        })
    }

    validateuserName() {
        return this.userName.valid || this.userName.untouched
    }

    validatepassWord() {
        return this.passWord.valid || this.passWord.untouched
    }

    validateconfirmPassword() {
        return this.confirmPassword.valid || this.confirmPassword.untouched
    }



    cancel() {
        this.route.navigate(['events'])
    }

    submit(formvalues) {
        if (this.loginRegForm.valid) {
            this.authservice.savenewUser(formvalues.userName, formvalues.passWord).subscribe()
            this.toastr.success('New Login User Saved');
            this.route.navigate(['user/login'])
        }
    }
}