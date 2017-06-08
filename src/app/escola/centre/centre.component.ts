import { Component, OnInit } from '@angular/core';
import { CentreService } from './centre.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({
<<<<<<< HEAD
 selector: 'centre',
 templateUrl:'./centre.component.html',
 styleUrls: ['../../cotxes.css'],
 providers: [CentreService]

})

   export class CentreComponent{
       

          
constructor(private centreService: CentreService) { } 
       
   }

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
