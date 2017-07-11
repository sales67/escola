import {Component, OnInit} from '@angular/core';
import {CursService} from '../curs.service';
import {AddCursaulaService} from './addCursaula.service';



@Component({
  selector: 'cursaula',
  templateUrl:'./addCursaula.component.html',
  styleUrls: ['../../escola.css'],
  providers: [AddCursaulaService]
})

    export class AddCursaulaComponent{
        
        addid;addnom;addidcurs;addidaula;values;error;finished;errorBuit;errorServer;errorN;data;delid;
        
        
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
        /////////////////////////////////////////////////)
        
        delCursaula(){  
            this.addCursaulaService.delCursaula(this.delid) 
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
                   this.finished=true;
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
    }