import {Component, OnInit} from '@angular/core';
import {PutCursService} from '../putCurs/putCurs.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';


@Component({
  selector: 'putCurs',
  templateUrl:'./PutCurs.component.html',
  styleUrls: ['../../escola.css'],
  providers: [PutCursService]
})

    export class PutCursComponent{
        
    putid;putnom;putidcentre;putnomcentre;values;errorBuit;finished;errorServer;errorId;
        

    constructor(private putCursService: PutCursService) { }
                            
        putCurs(){              this.putCursService.putCurs(this.putid,this.putnom,this.putidcentre,this.putnomcentre)
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

                      
    