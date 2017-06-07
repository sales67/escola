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

    export class ListMarcaComponent{

    constructor(private listCentreService: listCentreService) { }
         marques; 

        
    listCentre(){
     this.listCentreService.getCentres()
                .subscribe(
                data => (this.marques = data)
      );    
    }
    }