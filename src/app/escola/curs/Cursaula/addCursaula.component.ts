import {Component, OnInit} from '@angular/core';
import {CursService} from '../curs.service';
import {AddCursaulaService} from './addCursaula.service';



@Component({
  selector: 'addCursaula',
  templateUrl:'./addCursaula.component.html',
  styleUrls: ['../../escola.css'],
  providers: [AddCursaulaService]
})

    export class AddCursaulaComponent{
        
        addid;addnom;addidcurs;addidaula;values;error;finished;errorBuit;errorServer;errorN;
        
        
 constructor(private addCursaulaService: AddCursaulaService) { } 
        
     addCursaulaPost(){        this.addCursaulaService.addCursaulaPost(this.addidcurs,this.addidaula)
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
                        this.errorN = true; 
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
        this.errorN=false;
     } 
}