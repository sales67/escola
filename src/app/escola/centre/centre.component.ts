import {Component, OnInit} from '@angular/core';
import {CentreService} from './centre.service';



@Component({
<<<<<<< HEAD
 selector: 'centre',
 templateUrl:'./centre.component.html',
 styleUrls: ['../../cotxes.css'],
 providers: [CentreService]

=======
  selector: 'centre',
  templateUrl:'./centre.component.html',
  styleUrls: ['../escola.css'],
  providers: [CentreService]
>>>>>>> 879c3ed74244e5c98b2910d38285a7d20cc00608
})

   export class CentreComponent{
       

          
constructor(private centreService: CentreService) { } 
       
   }
<<<<<<< HEAD


=======
           
>>>>>>> 879c3ed74244e5c98b2910d38285a7d20cc00608
