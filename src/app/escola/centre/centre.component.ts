import {Component, OnInit} from '@angular/core';
import {CentreService} from './centre.service';



@Component({
  selector: 'centre',
  templateUrl:'./centr.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [CentreService]
})

    export class CentreComponent{
        

           
 constructor(private centreService: CentreService) { } 

    }