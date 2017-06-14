import {Component, OnInit} from '@angular/core';
import {AlumneToolsService} from './alumneTools.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'alumneTools',
  templateUrl:'./alumneTools.component.html',
  styleUrls: ['../../escola.css'],
  providers: [AlumneToolsService],  
})

    export class AlumneToolsComponent{
           
 constructor(private alumneToolsService: AlumneToolsService) { } 
    }
        
    