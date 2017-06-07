import { Component, OnInit } from '@angular/core';
import { EquipamentService } from '../equipament.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
    selector: 'app-modificar-eq',
    templateUrl: './modificar-eq.component.html',
    styleUrls: ['./modificar-eq.component.css'],
    providers: [EquipamentService]
})
export class ModificarEQComponent implements OnInit {
    
    public camps = [
        { value: 'nom', display: 'nom' },
        { value: 'combustible', display: 'combustible'},
        { value: 'potencia', display: 'potencia' },
        { value: 'traccio', display: 'traccio' },
        { value: 'climatitzador', display: 'climatitzador' },
        { value: 'llantes17', display: 'llantes17' },
        { value: 'llantes18', display: 'llantes18' },
        { value: 'llantes19', display: 'llantes19' },
        { value: 'navegador', display: 'navegador' },
        { value: 'pintura', display: 'pintura' },
        { value: 'multimedia6', display: 'multimedia6' },
        { value: 'multimedia9', display: 'multimedia9' },
    ];

    public certFals = [
        {value: 'true', display: 'Afegir'},
        {value: 'false', display: 'Treure'},
    ];

    camp: string;
    idEq4: number;
    nouValor: string;

    error_mod = false;
    values_mod;
    finished_mod;

    constructor( private equipamentService: EquipamentService) { }

    ngOnInit() {
        let noEsBoolea = <HTMLElement>document.body.querySelector("#noEsBoolea");
        let esBoolea = <HTMLElement>document.body.querySelector("#esBoolea");
        let selectBool = <HTMLInputElement>document.body.querySelector("#selectBool");
        
        selectBool.addEventListener("change", () => {
            if(selectBool.value == 'nom' || selectBool.value == 'combustible' || selectBool.value == 'potencia' || selectBool.value == 'traccio') {
                noEsBoolea.hidden = false;
                esBoolea.hidden = true;
            } else {
                noEsBoolea.hidden = true;
                esBoolea.hidden = false;
            }
        })
    }

    modEquipament() {
        
        this.equipamentService.modEq(this.idEq4, this.camp, this.nouValor)
        .subscribe(
                // value => this.values_mod = value,
                // error => this.error_mod = true,
                // () => this.finished_mod = true
                data => { this.idEq4 = data; },
                // err => console.error(err), // P E T A
                () => console.log('Modificat equipament amb id: ' + this.idEq4)
            );
            // this.error_mod = false;
            // this.finished_mod = false;
    }

    /*updateMarca(){        this.updateMarcaService.updateMarca(this.addId,this.addName,this.addTel,this.addCountry,this.addMail)
               .subscribe(
          value => this.values=value,
          error => this.error = true,
          () => this.finished = true
      );
        this.error=false;
        this.finished=false;
     }*/
}
