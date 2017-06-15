import {Component, OnInit} from '@angular/core';
import {ListHobbyAllService} from './listHobbyAll.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'listHobbyAll',
  templateUrl:'./listHobbyAll.component.html',
  styleUrls: ['../../../../escola.css'],
  providers: [ListHobbyAllService]
})

    export class ListHobbyAllComponent{
        

           
 constructor(private listHobbyAllService: ListHobbyAllService) { } 
        
        hobbies;
  listHobby(){
     this.listHobbyAllService.getHobbies()
                .subscribe(
                data => { this.hobbies = data},
                err => console.error(err))
         
                } 
            }
         
       