import { Routes } from '@angular/router'
import { EventList } from './shared/event.list.component'
import { EventThumbnail } from './shared/event.thumbnail.component'
import { EventDetailComponent } from '../app/events/event-details/event-details.component'
import { CreateEventComponent } from './shared/create.event.component'
import { Error404Component } from '.././app/errors/404.component'
//import { EventRouteActivator } from '../app/events/event-details/event.route.activator.service'
import { EventResolver } from './shared/event.resolver.service'
import { EventListResolverService } from './shared/event.list.resolver.service'
import { CreateSessionComponent } from '../app/events/event-details/create.session.component'
export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventList, resolve: { events: EventListResolverService } },
    //{ path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator] },
    { path: 'events/:id', component: EventDetailComponent, resolve: {event:EventResolver} },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: '**', redirectTo: '404', pathMatch: 'full' }

]

