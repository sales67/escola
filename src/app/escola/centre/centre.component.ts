import { Component, OnInit } from '@angular/core';
import { CentreService } from './centre.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({

 selector: 'centre',
 templateUrl:'./centre.component.html',
 styleUrls: ['../escola.css'],
 // styleUrls: ['../../cotxes.css'],
 providers: [CentreService]

})

   export class CentreComponent{
         
constructor(private centreService: CentreService) { } 
       
   }