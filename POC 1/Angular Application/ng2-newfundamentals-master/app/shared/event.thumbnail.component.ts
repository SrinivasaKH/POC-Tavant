import { Component, Input, OnInit } from '@angular/core'
import { IEvent } from '../../app/shared/event.model'
@Component({
    selector: 'event-thumbnail',
    template: `
   <div [routerLink]="['/events',event.id]" class="Well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date:{{event?.date}}</div>
    <div>Time:{{event?.time}} </div>
	<div>Price:\${{event?.price}}</div>
    <div>
     <span>Location:{{event?.location?.address}}</span>
     <span class="pad-left">Location:{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    </div>
  
    `,
    styles: [`
   .thumbnail{min-height:201px}
   .pad-left{margin-left:10px;}
   .well div{color:green;}
   `]
})
export class EventThumbnail {
    @Input() event: IEvent
    maskedId:string;

    // ngOnInit(){
    //     this.maskedId=btoa(this.event.id.toString());
    // }
    //     getStartTimeClass(){

    //         //const isEarlystart = this.event && this.event.Time ==='8:00 am'
    //     //     if(this.event && this.event.Time ==='8:00 am')
    //     //     return ['green', 'bold']
    //     //     return []
    //     //     //return {green:isEarlystart, bold:isEarlystart}
    //     // }
}