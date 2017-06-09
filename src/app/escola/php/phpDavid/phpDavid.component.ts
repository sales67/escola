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
   consultardades;psswd;user;finished;data;errorUser;
    
    constructor(private phpDavidService: PhpDavidService) { }
    
    login(){       
         this.phpDavidService.login(this.psswd,this.user)        
           .subscribe(
             
          data => {
              this.data=data,console.log(data);
              if (data=="Connected successfully"){
                      this.finished=true;
                  }
              else{
                  this.errorUser=true;
              }
          })       
        this.finished=false;  
        this.errorUser=false;
        }
}
