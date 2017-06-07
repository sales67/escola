import {Component, OnInit,ViewChild} from '@angular/core';
//import {DeleteMarcaService} from '../delCentre/deleteMarca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
//import {delCentreComponent} from '../delCentre/delCentre.component';
import {delCentreService} from'../delCentre/delCentre.service';

@Component({
  selector: 'deleteMarca',
  templateUrl:'./delCentre.component.html',
  styleUrls: ['../../escola.css'],
  providers: [delCentreService,delCentreComponent,delCentreService]
})

    export class delCentreComponent{
        
        deleteId;data;logError;marques;errorBuit;finished;errorServer;

    constructor(private delCentreService: delCentreService, private delCentreComponent:delCentreComponent) { }
        
     @ViewChild(delCentreComponent) delCentrecomponent;

        deleteMarca(){  
            this.delCentreService.delCentre(this.deleteId) 
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
          () => {
              this.delCentreComponent.deleteByMarca(this.deleteId);
              this.finished = true;              
          }            
      );        
        this.errorServer=false;
        this.errorBuit=false;
        this.finished=false;  
     }
}