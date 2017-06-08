import {Component, OnInit} from '@angular/core';
import {CentreService} from './centre.service';



@Component({
  selector: 'centre',
  templateUrl:'./centre.component.html',
  styleUrls: ['../escola.css'],
  providers: [CentreService]
})

   export class CentreComponent{
       

          
constructor(private centreService: CentreService) { } 
       
   }
           