import {Component, OnInit} from '@angular/core';
import {ListAlumneService} from './listAlumne.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'listAlumne',
  templateUrl:'./listAlumne.component.html',
  styleUrls: ['../../../escola.css'],
  providers: [ListAlumneService]
})

    export class ListAlumneComponent{           
 constructor(private listAlumneService: ListAlumneService) { } 

    }
        