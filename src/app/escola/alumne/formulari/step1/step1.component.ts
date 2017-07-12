import {Component, OnInit} from '@angular/core';
import {Step1Service} from './step1.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule, } from '@angular/router';

@Component({
  selector: 'step1',
  templateUrl:'./step1.component.html',
  styleUrls: ['../../../escola.css'],
  providers: [Step1Service],  
})

    export class Step1Component{
           id
 constructor(private step1Service: Step1Service) { } 
        
    }