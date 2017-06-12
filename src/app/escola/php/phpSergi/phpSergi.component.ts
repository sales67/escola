import { Component, OnInit } from '@angular/core';
import { PhpSergiService } from './phpSergi.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({

 selector: 'phpSergi',
 templateUrl:'./phpSergi.component.html',
 styleUrls: ['../../escola.css'],
 providers: [PhpSergiService]

})
export class PhpSergiComponent {

    psswd;user;finished;data;errorUser;token;status;
    
    constructor(private phpSergiService: PhpSergiService) { }
    
    login(){       
         this.phpSergiService.login(this.psswd,this.user)         
           .subscribe(
          data => { 
                  this.data=data;   
                  this.token=data["token"];
                  this.status=data["status"];              
              
                  if (this.phpSergiService.token(this.user,this.token) && this.status=="ok")
                  {
                      this.finished=true;
                  }    
                  else{
                      this.errorUser=true;
                  }        
        
        });
        this.finished=false;  
        this.errorUser=false;
    }
}
             
