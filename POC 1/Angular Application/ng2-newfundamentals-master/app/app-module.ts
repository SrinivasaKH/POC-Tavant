import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { AuthService } from './user/auth.service'
import { userRoutes } from './user/user.routes'
import { RouterModule } from '@angular/router'
import { EventService } from './shared/event.service'
import { EventList } from './shared/event.list.component'
import { EventThumbnail } from './shared/event.thumbnail.component'
import { TOASTR_TOKEN, Toastr } from './common/toastr.service'
import { JQ_TOKEN } from './common/jquery.service'
import { SimpleModalComponent } from './common/simple.model.component'
import { EventDetailComponent } from '../app/events/event-details/event-details.component'
import { appRoutes } from '../app/router'
import { CreateEventComponent } from './shared/create.event.component'
import { Error404Component } from '.././app/errors/404.component'
//import { EventRouteActivator } from './events/event-details/event.route.activator.service'
import { EventListResolverService } from './shared/event.list.resolver.service'
import { EventResolver } from './shared/event.resolver.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CreateSessionComponent } from '../app/events/event-details/create.session.component'
import { SessionListComponent } from '../app/events/event-details/session.list.component'
import { collapsibleWellComponent } from '../app/common/collapisble.well.component'
import { DurationPipe } from '././shared/duration.pipe'
import { ModalTriggerDirective } from './common/modalTrigger.directive'
import { UpvoteComponent } from '../app/events/event-details/upvote.component'
import { VoterService } from '././events/event-details/voter.service'
import { LocationValidator } from './shared/location.validator.directive'
import { HttpModule } from '@angular/http'


declare let toastr: Toastr
declare let jQuery: Object
@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [EventsAppComponent,
        EventDetailComponent,
        NavBarComponent,
        EventList,
        EventThumbnail,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        collapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator,
        Error404Component
        
        // userRoutes
    ],
    bootstrap: [EventsAppComponent],
    // providers: [AuthService, EventService]
    providers: [EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        // EventRouteActivator,
        EventResolver,
        EventListResolverService,
        VoterService,
        AuthService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }

    ]

})
export class AppModule {


}
function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('you have not saved this event, do you really want to cancel?')
    return true
}

