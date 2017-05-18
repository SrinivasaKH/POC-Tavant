import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'
import { Routes } from '@angular/router'
import { NewLoginRegistration } from './newloginreg.component'

export const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'newuserlogin', component: NewLoginRegistration }
    // { path: '', redirectTo: '/login', pathMatch: 'full' }
]