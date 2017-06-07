import {Component, OnInit} from '@angular/core';
import {updateModelService} from './updateModel.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';


@Component({
  selector: 'updateModel',
  templateUrl:'./updateModel.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [updateModelService]
})

    export class updateModelComponent{
        
    addId;
    addName;
    addMarca;

    constructor(private updateModelService: updateModelService) { }
            
                
        updateModel(){        this.updateModelService.updateModel(this.addId,this.addName,this.addMarca)
               .subscribe(
                data => { this.addName = data;},                    
                () => console.log('has actualitzat el model: '+this.addName)
      );}        
  
    }
    