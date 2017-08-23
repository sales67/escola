import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css'],
    providers: [ HomeService ]
})
export class HomeComponent {
    constructor(private homeService: HomeService) { }    
}