
import { Component, OnInit } from '@angular/core';
import { JsJaumeMService } from './JsJaumeM.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({

 selector: 'JsJaumeM',
 templateUrl:'./JsJaumeM.component.html',
 styleUrls: ['../../escola.css'],
 providers: [JsJaumeMService]

})
export class JsJaumeMComponent {
/*
    psswd;user;finished;data;errorUser;data2
    
    constructor(private phpSergiService: PhpSergiService) { }
    
    login(){       
         this.phpSergiService.login(this.psswd,this.user)        
           .subscribe(
          data => {
             this.data=data;
              
             console.log(this.data);
             console.log(this.user,this.data["token"]);  
        
        
        });/*
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
             
