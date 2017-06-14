import {Component, OnInit} from '@angular/core';
import {UpdateAlumneService} from '../updateAlumne/updateAlumne.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';


@Component({
  selector: 'updateAlumne',
  templateUrl:'./updateAlumne.component.html',
  styleUrls: ['../../../escola.css'],
  providers: [UpdateAlumneService]
})

    export class UpdateAlumneComponent{
    valueSelect;
    escola;id;idEscola;nom=true;
    nomAlumne;
    errorServer;errorBuit;
    errorId;values;finished; 


    constructor(private updateAlumneService: UpdateAlumneService) { }



    select(value){ 
        
        console.log(value.mymodel);
       //  valu = <HTMLInputElement>document.body.querySelector('#gg').attributes;
       // console.log(document.getElementById("gg").nodeValue);        
//console.log(this.valueSelect);
     var a = <HTMLInputElement>document.body.querySelector('#gg');
   // var b = <HTMLInputElement>document.body.querySelector('#ff');
       console.log(a.value);
    //    console.log(b.value);
        if (this.valueSelect=="0")
            {
                this.nom=true;
                this.escola=false;
            }
        if (this.valueSelect=="1")
            {
                this.nom=false;
                this.escola=true;
            }
        console.log(this.nom);
        console.log(this.escola);
        console.log(value);
        console.log(this.valueSelect);
    }
                
        updateNom(){        
            this.updateAlumneService.updateAlumne(this.id,1,this.nomAlumne)
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
        updateEscola(){
            this.updateAlumneService.updateAlumne(this.id,1,this.idEscola)
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

                      
    