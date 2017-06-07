import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
import {listModelService} from './listModel.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'listModel',
  templateUrl:'./listModel.component.html',
  styleUrls: ['list.css'],
  providers: [listModelService]
})

    export class listModelComponent{

    constructor(private listMarcaService: listModelService) { }
         models; 
        
    listModel(){
     this.listMarcaService.getModels()
                .subscribe(
                data => { this.models = data;},
                err => console.error(err),
                () => console.log('done')
      );}
    }