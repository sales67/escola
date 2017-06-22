import {Component, OnInit,ViewChild} from '@angular/core';
import {DelHobbyService} from '../delHobby/delHobby.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'delhobby',
  templateUrl:'./delHobby.component.html',
  styleUrls: ['../../../escola.css'],
  providers: [DelHobbyService]
})

    export class DelHobbyComponent{
        
        delid;data;logError;marques;errorBuit;finished;errorServer;

    constructor(private delHobbyService: DelHobbyService) { }
        
    // @ViewChild(deleteModelComponent) deleteModelcomponent;

        delHobby(){  
            this.delHobbyService.delHobby(this.delid) 
            .catch((error: any) => { 
               if (error.status === 0 || error.status === "0") {
                   console.log("Servidor Parat"); 
                    this.errorServer=true;
                    }   
                else if (error.status === 400 || error.status === "400")
                    {                        
                        this.errorBuit = true; 
                    }
                else if (error.status === 500 || error.status === "500")
                    {
                        this.errorBuit = true; 
                    }
                else {                    
                   return error.json();                    
                }            
        }).subscribe(
          value => this.data=value,
          error => {},
          () => this.finished = true
      );        
        this.errorServer=false;
        this.errorBuit=false;
        this.finished=false;  
     }
}