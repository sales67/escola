import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
import {ListMarcaIdService} from './listMarcaId.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'listMarcaId',
  templateUrl:'./listMarcaId.component.html',
  styleUrls: ['../../../cotxes.css'],
  providers: [ListMarcaIdService]
})

    export class ListMarcaIdComponent{

    constructor(private listMarcaIdService: ListMarcaIdService) { }
         marques;id;error;finished;
    listMarcaId(){
     this.listMarcaIdService.getMarcaId(this.id)
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