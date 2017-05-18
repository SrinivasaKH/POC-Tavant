import { NgModule } from '@angular/core'
import { LoginComponent } from './login.component'
import { ProfileComponent } from './profile.component'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NewLoginRegistration } from './newloginreg.component'
import { EqualValidator } from './equal.validator.directive'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        ProfileComponent,
        NewLoginRegistration,
        EqualValidator
    ],
    providers: []

})
export class UserModule {

}