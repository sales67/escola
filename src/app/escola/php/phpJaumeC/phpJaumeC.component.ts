import { Component, OnInit } from '@angular/core';
import { PhpJaumeCService } from './phpJaumeC.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({

 selector: 'phpJaumeC',
 templateUrl:'./phpJaumeC.component.html',
 styleUrls: ['../../escola.css'],
 providers: [PhpJaumeCService]

})
export class PhpJaumeCComponent {

    consultardades;psswd;user;finished;data;errorUser;
    
    constructor(private phpJaumeCService: PhpJaumeCService) { }
    
    login(){   

         this.phpJaumeCService.login(this.psswd,this.user)        
           .subscribe(
          data => {
              this.data=data;
              console.log(this.data);
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


/*import { Component, OnInit } from '@angular/core';
import { PhpJaumeCService } from './phpJaumeC.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({

 selector: 'phpJaumeC',
 templateUrl:'./phpJaumeC.component.html',
 //styleUrls: ['../escola.css'],
 providers: [PhpJaumeCService]

})
export class PhpJaumeCComponent {
    constructor(private centreService: PhpJaumeCService) { }
    prova;
      
         provaphp(){
        this.centreService.provaphp()
            .subscribe(
            data => (this.prova = data, console.log(data))
                    
      );    }
}*/

