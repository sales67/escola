import {Component, OnInit} from '@angular/core';
import {ListHobbyService} from './listHobby.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'listHobby',
  templateUrl:'./listHobby.component.html',
  styleUrls: ['../../../escola.css'],
  providers: [ListHobbyService]
})

    export class ListHobbyComponent{           
 constructor(private listHobbyService: ListHobbyService) { } 

    }
        