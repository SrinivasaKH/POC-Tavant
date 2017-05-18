import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { IEvent, ISession } from '../../shared/event.model'
import { restrictedWords } from '../../shared/restricted.words.validator'
import { AuthService } from '../../user/auth.service'
import { Observable } from 'rxjs/Rx'
import { Router } from '@angular/router'
import { Response } from '@angular/http';
import { Durations } from '../event-details/duration'
import { Levels } from '../event-details/level'
import { EventService } from '../../shared/event.service'


@Component({
    selector: 'create-session',
    templateUrl: 'app/events/event-details/create.session.component.html',
    styles: [`
  em{float:right; color:#E05c65; padding-left: 10px}
  .error input, .error select, .error textarea{background-color:#E3C3C5}
  .error ::-webkit-input-placeholder{color:#999;}
  .error :: -moz-placeholder{color:#999}
  .error :: -moz-placeholder{color:#999}
  .error :: ms-input-placeholder{color:#999}
  `]
})
export class CreateSessionComponent implements OnInit {

    @Output() saveNewSession = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()
    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl


    constructor(private authseervices: AuthService, private eventservice:EventService) { }
    public durationslots: Durations[];
    public levels: Levels[];
    public durationDetails() {
        this.authseervices.getdurations().
            subscribe((resp) => {
                this.durationslots = resp.durations;

            }
            )
    }

    public leveldetails() {
        this.authseervices.getlevel().subscribe((levelresp) => {
            this.levels = levelresp.levels;
            //console.log(this.durationslots = levelresp.levels)
        })
    }
    ngOnInit() {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract

        })


        this.durationDetails();
        this.leveldetails();

    }
    // saveSession(formvalues) {

    //     let session: ISession = {
    //         id: undefined,
    //         name: formvalues.name,
    //         duration: +formvalues.duration,
    //         level: formvalues.level,
    //         presenter: formvalues.presenter,
    //         abstract: formvalues.abstract,
    //         voters: []
    //     }



    //     console.log(session)
    //     this.saveNewSession.emit(session)
    // }

    cancel() {
        this.cancelAddSession.emit()
    }


    saveSession(newSessionForm) {
       // debugger;
        // let session: ISession = {
        //     id: undefined,
        //     name: newSessionForm.name,
        //     duration: +newSessionForm.duration,
        //     level: newSessionForm.level,
        //     presenter: newSessionForm.presenter,
        //     abstract: newSessionForm.abstract,
        //     voters: []
        // }

      
       
        console.log('session')
        this.eventservice.saveSession(newSessionForm).subscribe();
        //this.saveNewSession.emit(session)
    }

}