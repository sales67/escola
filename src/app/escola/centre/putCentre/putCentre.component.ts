import {Component, OnInit} from '@angular/core';
import {putCentreService} from '../putCentre/putCentre.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';


@Component({
  selector: 'putCentre',
  templateUrl:'./putCentre.component.html',
  styleUrls: ['../../escola.css'],
  providers: [putCentreService]
})

    export class PutCursComponent{
        
    addId;addName;addTel;addCountry;addMail;values;errorBuit;finished;errorServer;errorId;
        

    constructor(private putCentreService: putCentreService) { }
                            
        putCurs(){              this.putCentreService.putCentre(this.addId,this.addName,this.addTel,this.addCountry)
                  .catch((error: any) => {               
               if (error.status === 0 || error.status === "0") {                   
                    this.errorServer=true;
                    }   
                else if (error.status === 400 || error.status === "400")
                    {
                        this.errorBuit = true; 
                    }
                else if (error.status === 500 || error.status === "500")
                    {
                        this.errorId = true; 
                    }
                else {                    
                   return error.json();                    
                }            
        }).subscribe(
          value => this.values=value,
          error => {},
          () => this.finished = true         
      );
        this.errorBuit=false;
        this.errorServer=false;
        this.finished=false;
        this.errorId=false;       
     }    
}

                      
    