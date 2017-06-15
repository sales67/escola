import {Component, OnInit,ViewChild} from '@angular/core';
import {DelHobbyService} from '../delHobby/delHobby.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
//import {deleteModelComponent} from '../../model/delete-model/deleteModel.component';
//import {deleteModelService} from'../../model/delete-model/deleteModel.service';

@Component({
  selector: 'delhobby',
  templateUrl:'./delHobby.component.html',
  styleUrls: ['../../../escola.css'],
  providers: [DelHobbyService]
})

    export class DelHobbyComponent{
        
        delid;data;logError;marques;errorBuit;finished;errorServer;

    constructor(private delhobbyService: DelHobbyService) { }
        
    // @ViewChild(deleteModelComponent) deleteModelcomponent;

        delHobby(){  
            this.delHobbyService.delHobby(this.delid) 
            .catch((error: any) => { 
                console.log(error.status);
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
            
            
            
            
            
            
            
            
      /*      
            
            
            
            .catch((error: any) => {
               if (error.status === 500 || error.status === "500") {
                   console.log("Marca inexistent");
                   this.error = true;
               }  
                else if (error.status === 400 || error.status === "400") {
                   console.log("Marca inexistent");
                   this.error = true;
               }
                else if (error.status === 0 || error.status === "0") {            
                   this.error = true;
               }
               else {
                   return error.json();
               }
        })
    .subscribe(
          value => this.marques=value,              
          error => {this.error=true;},
          () => () => {
              this.finished = true;
              this.deleteModelComponent.deleteByMarca(this.deleteId);
          }
      );
        this.error=false;
        this.finished=false;         
        }
        */
    }