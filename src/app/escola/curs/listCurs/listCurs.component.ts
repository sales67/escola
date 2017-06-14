import {Component, OnInit} from '@angular/core';
import {ListCursService} from '../listCurs/listCurs.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'listCurs',
  templateUrl:'./listCurs.component.html',
  styleUrls: ['../../escola.css'],
  providers: [ListCursService]
})

    export class ListCursComponent{

    constructor(private listCursService: ListCursService) { }
        cursos; prova; cursId; id; errorBuit;finished;errorServer;

        
    listCurs(){
        this.listCursService.listCurs()
            .subscribe(
            data => (this.cursos = data, console.log(data))
                    
      );    
    }
        
         provaphp(){
        this.listCursService.provaphp()
            .subscribe(
            data => (this.prova = data, console.log(data))
                    
      );    
    }
            
        getCursId(){
            this.listCursService.getCursId(this.id)
                .subscribe(
                data => { this.cursId = data;console.log(this.cursId);},
                err => console.error(err),
                () => console.log('done')
      );}
    }