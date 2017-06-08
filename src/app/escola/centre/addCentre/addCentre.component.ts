import {Component, OnInit} from '@angular/core';
import {CentreService} from '../centre.service';
import {addCentreService} from './addCentre.service';



@Component({
  selector: 'addCentre',
  templateUrl:'./addCentre.component.html',
  styleUrls: ['../../escola.css'],
  providers: [addCentreService]
})

    export class addCentreComponent{
        
        addid;addnom;addnomcentre;addidcentre;values;error;finished;errorBuit;errorServer;
           
 constructor(private addCentreService: addCentreService) { } 
        
     addCursPost(){        this.addCentreService.addCentrePost(this.addid,this.addnom,this.addidcentre,this.addnomcentre)
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