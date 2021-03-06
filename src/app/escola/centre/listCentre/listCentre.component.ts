import {Component, OnInit} from '@angular/core';
import {listCentreService} from '../listCentre/listCentre.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'listCentre',
  templateUrl:'./listCentre.component.html',
  styleUrls: ['../../escola.css'],
  providers: [listCentreService]
})

    export class listCentreComponent{

    constructor(private listCentreService: listCentreService) { }
        centres; 

        test;
        
    listCentre(){
     this.listCentreService.listCentre()
                .subscribe(
                data => (this.centres = data,
                  console.log(data))
      );    
    }
  testCentre() {
         this.listCentreService.test()
             .subscribe(
                 data => (this.test = data)
             );
           }
}