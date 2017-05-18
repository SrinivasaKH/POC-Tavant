import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import{ EventService} from '../shared/event.service'
import { IEvent, ISession } from '../shared/event.model'
//import {LocationValidator} from '../shared/location.validator.directive'
@Component({
    // template:`
    //  <h1>New Event</h1>
    //  <hr>
    //  <div class="col-md-6">
    //  <h3>[Create Event Form will go here]</h3>
    //  <br/>
    //  <br/>
    //  <button type="submit" class="btn btn-primary">Save</button>
    //  <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    //  </div>
    // `
    templateUrl:'app/shared/create.event.component.html',
    styles: [`
  em{float:right; color:#E05c65; padding-left: 10px}
  .error input{background-color:#E3C3C5}
  .error ::-webkit-input-placeholder{color:#999;}
  .error :: -moz-placeholder{color:#999}
  .error :: -moz-placeholder{color:#999}
  .error :: ms-input-placeholder{color:#999}
  `]

})
export class CreateEventComponent implements OnInit {
    isDirty:boolean= true;
    event:IEvent;
    constructor(private route:Router, private eventservice:EventService){

    } 
 ngOnInit(){
     this.event = {
         id:null,
         name: '',
         date: null,
         time: '',
         price: null,
         imageUrl: '',
         location: {
             address: '',
             city: '',
             country: ''
         },
         onlineurl: '',
         sessions:null


     }
 }
    saveEvent(FormValues){
       // console.log(FormValues)
       this.eventservice.saveEvent(FormValues).subscribe(event =>{
           this.route.navigate(['/events'])
           this.isDirty=false
           
       })
      // this.isDirty=false
      // this.route.navigate(['/events'])
    }
    cancel(){
    this.route.navigate(['/events'])
    }
}