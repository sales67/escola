import {Component, OnInit} from '@angular/core';
import {ListAlumneAllService} from './listAlumneAll.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'alumne',
  templateUrl:'./listAlumneAll.component.html',
  styleUrls: ['../../../escola.css'],
  providers: [ListAlumneAllService]
})

    export class ListAlumneAllComponent{
        

           
 constructor(private listAlumneAllService: ListAlumneAllService) { } 
        
        alumnes;
  listAlumnes(){
     this.listAlumneAllService.getAlumnes()
                .subscribe(
                data => { this.alumnes = data;console.log(this.alumnes);},
                err => console.error(err))
         
                } 
            }
         
       