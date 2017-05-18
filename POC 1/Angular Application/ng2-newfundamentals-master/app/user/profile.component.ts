import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../app/user/auth.service'
import { TOASTR_TOKEN,Toastr } from '../common/toastr.service'
@Component({
  // template: `
  //   <h1>Edit Your Profile</h1>
  //   <hr>
  //   <div class="col-md-6">
  //     <h3>[Edit profile form will go here]</h3>
  //     <br />
  //     <br />
  //     <button type="submit" class="btn btn-primary">Save</button>
  //     <button type="button" class="btn btn-default">Cancel</button>
  //   </div>
  // `,
 // templateUrl: 'app/user/profile.component.html',
  templateUrl: '../app/user/profile.component.html',
  styles: [`
  em{float:right; color:#E05c65; padding-left: 10px}
  .error input{background-color:#E3C3C5}
  .error ::-webkit-input-placeholder{color:#999;}
  .error :: -moz-placeholder{color:#999}
  .error :: -moz-placeholder{color:#999}
  .error :: ms-input-placeholder{color:#999}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName: FormControl
  private lastName: FormControl
  constructor(private route: Router, private authservice: AuthService, @Inject(TOASTR_TOKEN) private toastr:Toastr ) { }
  ngOnInit() {
    this.firstName = new FormControl(this.authservice.currentUser.fisrtName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.authservice.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
  saveProfile(formvalues) {
    if (this.profileForm.valid) {
      this.authservice.updateCurrentUser(formvalues.firstName, formvalues.lastName)
      this.toastr.success('Profile Saved');
      this.route.navigate(['events'])
    }

  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }

  cancel() {
    this.route.navigate(['events'])
  }
}