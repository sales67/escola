import {Component, OnInit} from '@angular/core';
import {AlumneService} from './alumne.service';



@Component({
  selector: 'alumne',
  templateUrl:'./alumne.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [AlumneService]
})

    export class AlumneComponent{
        

           
 constructor(private alumneService: AlumneService) { } 

}