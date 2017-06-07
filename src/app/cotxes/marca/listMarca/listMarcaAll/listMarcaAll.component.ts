import {Component, OnInit} from '@angular/core';
import {ListMarcaAllService} from './listMarcaAll.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'listMarcaAll',
  templateUrl:'./listMarcaAll.component.html',
  styleUrls: ['../../../cotxes.css'],
  providers: [ListMarcaAllService]
})

    export class ListMarcaAllComponent{

    constructor(private listMarcaAllService: ListMarcaAllService) { }
         marques; 
        
    listMarca(){
     this.listMarcaAllService.getMarques()
                .subscribe(
                data => { this.marques = data;console.log(data);},
                err => console.error(err),
                () => console.log('done')
      );}
    }