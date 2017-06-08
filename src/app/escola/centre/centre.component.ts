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

<<<<<<< HEAD

=======
>>>>>>> 87be28704663792c0564427e08af891ce4be7d43
})

   export class CentreComponent{
         
constructor(private centreService: CentreService) { } 
       
<<<<<<< HEAD
   }
=======
   }
>>>>>>> 87be28704663792c0564427e08af891ce4be7d43
