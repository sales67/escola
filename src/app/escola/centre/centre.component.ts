import { Component, OnInit } from '@angular/core';
import { CentreService } from './centre.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({

 selector: 'centre',
 templateUrl:'./centre.component.html',
 styleUrls: ['../../cotxes.css'],
 providers: [CentreService]
<<<<<<< HEAD
})

   export class CentreComponent{
         
constructor(private centreService: CentreService) { } 
       
   }
=======

})

   export class CentreComponent{
       

          
constructor(private centreService: CentreService) { } 
       
   }

=======
<<<<<<< HEAD
           
>>>>>>> 879c3ed74244e5c98b2910d38285a7d20cc00608
>>>>>>> fdc3b6121d9002a1c5c6bdaf482dece72e4d4aca
=======
    selector: 'centre',
    templateUrl: './centre.component.html',
    styleUrls: ['../escola.css'],
    providers: [CentreService]
})


export class CentreComponent {
    constructor(private centreService: CentreService) { }
}
>>>>>>> 89231cd7c9adad8f8d43a71dcfc460c4c0ddce11
>>>>>>> 739a9d1303e00f277f20bc558dfaa2e3c9246c76
