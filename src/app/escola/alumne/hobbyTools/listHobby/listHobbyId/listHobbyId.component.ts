import {Component, OnInit} from '@angular/core';
import {ListHobbyIdService} from './listHobbyId.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'listHobbyId',
  templateUrl:'./listHobbyId.component.html',
  styleUrls: ['../../../../escola.css'],
  providers: [ListHobbyIdService]
})

    export class ListHobbyIdComponent{
        

           
 constructor(private listHobbyIdService: ListHobbyIdService) { } 
  alumneId;id;        
        getAlumneId(){
            this.listHobbyIdService.getHobbyId(this.id)
                .subscribe(
                data => { this.alumneId = data;console.log(this.alumneId);},
                err => console.error(err),
                () => console.log('done')
      );}
    }
        
    