import {Component, OnInit} from '@angular/core';
import {FormulariService} from './formulari.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'formulariS',
  templateUrl:'./formulari.component.html',
  styleUrls: ['../../escola.css'],
  providers: [FormulariService],  
})

    export class FormulariComponent{
        
        step=1;
        final=false;
           
 constructor(private formulariService: FormulariService) { }

        first(){
            this.step=1;
            this.final=false;
        }
        second(){ 
            this.step=2;
            this.final=true;  
        }
    }
        
    