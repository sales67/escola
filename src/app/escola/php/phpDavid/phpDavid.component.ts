import { Component, OnInit } from '@angular/core';
import { PhpDavidService } from './phpDavid.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({

 selector: 'phpDavid',
 templateUrl:'./phpDavid.component.html',
 styleUrls: ['../../escola.css'],
 providers: [PhpDavidService]

})
export class PhpDavidComponent {
   consultardades;psswd;user;finished;data;errorUser;token;notfinished;status;
    
    constructor(private phpDavidService: PhpDavidService) { }
    
    login(){       
         this.phpDavidService.login(this.psswd,this.user)    
         .subscribe(
          data => {
              this.data=data;
              this.token=data["token"];
              this.status=data["status"];
              
              if (this.phpDavidService.validar(this.token,this.user)&&this.status=="ok"){
                  this.finished=true;
              }
                  else this.notfinished=true;
            
             console.log(this.data);
             console.log(this.user,this.data["token"]);  
              
          }
             
           )
          this.finished=false;
          this.notfinished=false;

    };
        /*
           .subscribe(
             
          data => {
              this.data=data,console.log(data),console.log(data['status']);;
              if (data=="Connected successfully"){
                      this.finished=true;
                  }
              else{
                  this.errorUser=true;
              }
          })       
        this.finished=false;  
        this.errorUser=false;
        }*/

}
