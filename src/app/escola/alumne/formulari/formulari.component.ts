import {Component, OnInit,ViewChild,Input} from '@angular/core';
import {FormulariService} from './formulari.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';
import {Step1Component} from './step1/step1.component';
import {Step2Component} from './step2/step2.component';

@Component({
  selector: 'formulariS',
  templateUrl:'./formulari.component.html',
  styleUrls: ['../../escola.css'],
  providers: [FormulariService],  
})

    export class FormulariComponent{
        
        @ViewChild(Step1Component) step1 : Step1Component;
        
        step=1;
        private final=false;
        r2;
           
 constructor(private formulariService: FormulariService) { }

        
        first(){
            this.step=1;
            this.final=false;
        }
        second(){ 
            this.step=2;
            this.final=true;  
        }
         
         Enviar(g){
             console.log(g);
         }
         resultat2(resultat2):void {
         this.r2=resultat2;
         console.log(resultat2);
         }
    }
        
    