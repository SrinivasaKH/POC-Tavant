import { Component } from '@angular/core'

@Component(
    {
        selector: 'events-app',
       //selector:'<nav-bar></nav-bar>',
        //template: '<h2>Hello World</h2>'
        template:`<nav-bar></nav-bar>
         <router-outlet></router-outlet>
        `
       // <event-list></event-list>
         // <router-outlet></router-outlet>
    }
)
export class EventsAppComponent {

}