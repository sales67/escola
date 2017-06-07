import {Component, OnInit} from '@angular/core';
import {ListMarcaNameService} from './listMarcaName.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'listMarcaName',
  templateUrl:'./listMarcaName.component.html',
  styleUrls: ['../../../cotxes.css'],
  providers: [ListMarcaNameService]
})

    export class ListMarcaNameComponent{

    constructor(private listMarcaNameService: ListMarcaNameService) { }
         marques;name;error;finished;
    listMarcaName(){
     this.listMarcaNameService.getMarcaId(this.name)
                .subscribe(
          value => {   
              this.marques=value;
              console.log(this.marques);
              
             if (this.marques.length==0)
                    {
                        this.error = true;
                    }
          },
          error => this.error = true,
          () => this.finished = true
      );
        this.error=false;
        this.finished=false;
    }
}