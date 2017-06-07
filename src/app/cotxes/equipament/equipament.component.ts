import { Component, OnInit, Input } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Http, Headers, Response } from '@angular/http';
// import { Routes, Router } from '@angular/router';
import { Equipament } from './equipament';
import { EquipamentService } from './equipament.service';

@Component({
  selector: 'app-equipament',
  templateUrl: './equipament.component.html',
  styleUrls: ['./equipament.component.css'],
  providers: [ EquipamentService ]
})
export class EquipamentComponent implements OnInit {
    
    idEq: number;
    equipament: Equipament;
    public equipaments: Array<Equipament> = [];
    
    constructor( private equipamentService: EquipamentService) { }
    
    ngOnInit() {
        this.equipament = this.equipamentService.equipamentBuit();
    }
    
    trobaEquipament() {
        this.equipamentService.getEq(this.idEq)
            .subscribe(
                data => { this.equipament = data; console.log(data); },
                err => console.error(err),
                () => console.log('done')
            );
    }
    
    trobaEquipaments() {
        this.equipamentService.getEqs()
                .subscribe(
                    data => { this.equipaments = data; console.log(data); },
                    err => console.error(err),
                    () => console.log('done')
        );
    }
}
