import { Component, OnInit } from '@angular/core';
import { PhpDavidService } from './phpDavid.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({

 selector: 'phpDavid',
 templateUrl:'./phpDavid.component.html',
 //styleUrls: ['../escola.css'],
 providers: [PhpDavidService]

})
export class PhpDavidComponent {
    constructor(private centreService: PhpDavidService) { }
    prova;
      
         provaphp(){
        this.centreService.provaphp()
            .subscribe(
            data => (this.prova = data, console.log(data))
                    
      );    }
}
