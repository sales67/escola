import {Component, OnInit} from '@angular/core';
import {AlumneService} from './alumne.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'alumne',
  templateUrl:'./alumne.component.html',
  styleUrls: ['../escola.css'],
  providers: [AlumneService]
})

    export class AlumneComponent{
        

           
 constructor(private alumneService: AlumneService) { } 

  alumnes;alumneId;id;
        
    listAlumnes(){
     this.alumneService.getAlumnes()
                .subscribe(
                data => { this.alumnes = data;console.log(this.alumnes);},
                err => console.error(err),
                () => console.log('done')
      );}
        
        getAlumneId(){
            this.alumneService.getAlumneId(this.id)
                .subscribe(
                data => { this.alumneId = data;console.log(this.alumneId);},
                err => console.error(err),
                () => console.log('done')
      );}
    }
        
    