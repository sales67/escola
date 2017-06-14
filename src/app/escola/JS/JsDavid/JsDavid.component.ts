

import { Component, OnInit } from '@angular/core';
import { JsDavidService } from './JsDavid.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({

 selector: 'JsDavid',
 templateUrl:'./JsDavid.component.html',
 styleUrls: ['../../escola.css'],
 providers: [JsDavidService]

})
export class JsDavidComponent {
/*
    psswd;user;finished;data;errorUser;data2
    
    constructor(private jsDavidService: JsDavidService) { }
    
    login(){       
         this.jsDavidService.login(this.psswd,this.user)        
           .subscribe(
          data => {
             this.data=data;
              
             console.log(this.data);
             //console.log(this.user,this.data["token"]);  
        
        
        });
        if (this.data["status"]=="ok") {   
            this.finished=true;/*
                  this.phpSergiService.token(this.user,this.data["token"])
                  .subscribe(                      
                    data2 => {
                        this.data2=data2;
                        
                    });}}
        
        this.finished=false;  
        this.errorUser=false;
}*/
             }
             
