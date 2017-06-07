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

    }