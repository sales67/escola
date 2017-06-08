import {Component, OnInit} from '@angular/core';
import {ListAlumneIdService} from './listAlumneId.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'listAlumneId',
  templateUrl:'./listAlumneId.component.html',
  styleUrls: ['../../../escola.css'],
  providers: [ListAlumneIdService]
})

    export class ListAlumneIdComponent{
        

           
 constructor(private listAlumneIdService: ListAlumneIdService) { } 
  alumneId;id;        
        getAlumneId(){
            this.listAlumneIdService.getAlumneId(this.id)
                .subscribe(
                data => { this.alumneId = data;console.log(this.alumneId);},
                err => console.error(err),
                () => console.log('done')
      );}
    }
        
    