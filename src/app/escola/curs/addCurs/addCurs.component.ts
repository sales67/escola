import {Component, OnInit} from '@angular/core';
import {CursService} from '../curs.service';
import {AddCursService} from './addCurs.service';



@Component({
  selector: 'addCurs',
  templateUrl:'./addCurs.component.html',
  styleUrls: ['../../escola.css'],
  providers: [AddCursService]
})

    export class AddCursComponent{
        
        addid;addnom;addnomcentre;addidcentre;values;error;finished;errorBuit;errorServer;errorN;
        
        
 constructor(private addCursService: AddCursService) { } 
        
     addCursPost(){        this.addCursService.addCursPost(this.addid,this.addnom,this.addidcentre,this.addnomcentre)
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