import {Component, OnInit} from '@angular/core';
import {addCentreService} from '../addCentre.service';
//import {AddMarcaService} from './addMarca.service';



@Component({
  selector: 'addCentre',
  templateUrl:'./addCentre.component.html',
  styleUrls: ['../../escola.css'],
  providers: [addCentreService]
})

    export class AddMarcaComponent{
        
        addName;addTel;addCountry;addMail;values;error;finished;errorBuit;errorServer;
           
 constructor(private addCentreService: addCentreService) { } 
        
     addCentrePost(){        this.addCentreService.addCentrePost(this.addName,this.addTel,this.addCountry,this.addMail)
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
          value => this.values=value,
          error => {},
          () => this.finished = true         
      );
        this.errorBuit=false;
        this.errorServer=false;
        this.finished=false;   
     } 
}