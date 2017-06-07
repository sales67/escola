import {Component, OnInit,ViewChild} from '@angular/core';
import {DelCursService} from '../delCurs/delCurs.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
//import {deleteModelComponent} from '../../model/delete-model/deleteModel.component';
//import {deleteModelService} from'../../model/delete-model/deleteModel.service';

@Component({
  selector: 'delCurs',
  templateUrl:'./delCurs.component.html',
  styleUrls: ['../../escola.css'],
  providers: [DelCursService,/*deleteModelComponent,deleteModelService*/]
})

    export class DelCursComponent{
        
        delid;data;logError;marques;errorBuit;finished;errorServer;

    constructor(private delCursService: DelCursService, private delCursComponent:DelCursComponent) { }
        
    // @ViewChild(deleteModelComponent) deleteModelcomponent;

        delCurs(){  
            this.delCursService.delCurs(this.delid) 
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
          error => {}         
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