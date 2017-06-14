import {Component, OnInit} from '@angular/core';
import {CentreService} from '../centre.service';
import {addLocalitatService} from './addLocalitat.service';



@Component({
  selector: 'addCentre',
  templateUrl:'./addLocalitat.component.html',
  styleUrls: ['../../escola.css'],
  providers: [addLocalitatService]
})

    export class addLocalitatComponent{
        
        addid;addlocalitat;values;error;finished;errorBuit;errorServer;
           
 constructor(private addLocalitatService: addLocalitatService) { }

 	addLocalitatPost(){        this.addLocalitatService.addLocalitatPost(this.addid,this.addlocalitat)
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