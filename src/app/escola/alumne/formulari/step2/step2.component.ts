import {Component, OnInit,Output,EventEmitter} from '@angular/core';
import {Step2Service} from './step2.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule, } from '@angular/router';


@Component({
  selector: 'step2',
  templateUrl:'./step2.component.html',
  styleUrls: ['../../../escola.css'],
  providers: [Step2Service],  
})

    export class Step2Component implements OnInit{
           
        hobbies;
        marcats:boolean[]=[];
        
@Output() resultat2: EventEmitter<boolean[]> = new EventEmitter<boolean[]>();
        
        
 constructor(private step2Service: Step2Service) {   
 }        
    noMarcat(id){         
        if (this.marcats[id]!=true)
            {
                this.marcats[id]=true;
            }
        else if (this.marcats[id]==true)
            {
                this.marcats[id]=false;
            }  
        this.resultat2.emit(this.marcats);            
    }

    ngOnInit(){
        this.step2Service.getHobbies()
            .subscribe(
            data => { this.hobbies = data;},
            err => console.error(err));               
    }
}
