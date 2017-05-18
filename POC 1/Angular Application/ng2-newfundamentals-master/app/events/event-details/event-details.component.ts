import { Component, OnInit } from '@angular/core'
import { EventService } from '../../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from '../../shared/event.model'
@Component({
    templateUrl: './app/events/event-details/event-details.component.html',
    styles: [`
    .contaner{padding-left:20px; padding-right:20px}
    .event-image:{height:100px}
    a{cursor:pointer}
    `]
})
export class EventDetailComponent {
    event: IEvent
    addMode: Boolean
    filterBy:string='all';
    sortBy:string='votes'
    constructor(private eventservice: EventService, private route: ActivatedRoute) {

    }
    ngOnInit() {
    //    this.route.params.forEach((Params:Params)=>{
    //    this.event= this.eventservice.getEvent(+Params['id']) 
    //    this.addMode=false 

        this.route.data.forEach((data) => {

            this.event = data['event']

            this.addMode = false  
      // }) 
       
       })
       
        // this.event = this.eventservice.getEvent
        //     (+this.route.snapshot.params['id'])
        //this.event = this.eventservice.getEvent(1)

    }

    addSession() {

        this.addMode = true;
    }
    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1
        this.event.sessions.push(session)
       // this.eventservice.updateEvent(this.event)
       this.eventservice.saveEvent(this.event).subscribe()
        this.addMode = false;
    }

    cancelAddSession(){
        this.addMode=false
    }
}


