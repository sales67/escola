import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { BotoComponent } from '../boto/boto.component';

@Component({
    selector: 'app-consultar-profe',
    templateUrl: './consultar-profe.component.html',
    styleUrls: ['../../escola.css'], // ['./consultar-profe.component.css']
    providers: [ ProfessorService ]
})
export class ConsultarProfeComponent implements OnInit {

    camp: string;
    nouValor;
    
    public camps = [
        {value: 'id', display: 'ID'},
        {value: 'nom', display: 'Nom'},
        {value: 'cognoms', display: 'Cognoms'},
        {value: 'dni', display: 'DNI'},
        {value: 'naixement', display: 'Data de naixement'},
        {value: 'curs', display: 'Curs impartit'},
        {value: 'esport', display: 'Esport practicat'}
    ];
    
    consultardades: string;
    consultar;
    idProfe: number;
    profes;
    index = 1;
    comptador = 1;
    boolDni = true;
    boolNom = true;
    boolCognoms = true;
    boolData = true;
    boolCurs = true;
    boolEsports = true;
    boolIncidencies = true;
    // idActual: number;

    error;
    errorServer;
    finished;

    constructor(private professorService: ProfessorService) { }

    ngOnInit() {
        // constants i funció per visualitzar un tipus d'INPUT diferent segons l'opció escollida en el SELECT
        const selectCamp = <HTMLInputElement>document.body.querySelector('#selectCamp');
        // const consId = <HTMLElement>document.body.querySelector('#consId');
        const consValor = <HTMLElement>document.body.querySelector('#consValor');
        const consValorData = <HTMLElement>document.body.querySelector('#consValorData');
        
        selectCamp.addEventListener('change', () => {

            switch (selectCamp.value) {
                /*case 'id':
                    consId.hidden = false;
                    consValorData.hidden = true;
                    consValor.hidden = true;
                    this.nouValor = this.idActual;
                    break;*/
                case 'naixement':
                    consValorData.hidden = false;
                    consValor.hidden = true;
                    // consId.hidden = true;
                    break;
                default:
                    consValor.hidden = false;
                    consValorData.hidden = true;
                    // consId.hidden = true;
                    break;
            }
        });
        
        // this.getIdActual();
    }

    // funció per determinar l'ID més gran de professor
    /*getIdActual() {
        this.professorService.getIdActual()
            .subscribe(
                data => (this.idActual = data)
            );
    }*/

    consultarProfeJava() {
        this.professorService.consultarProfeJava(this.camp, this.nouValor)
            .catch((error: any) => {
               if (error.status === 0 || error.status === "0") {
                    console.log("Servidor Aturat"); 
                    this.errorServer = true;
               }
               else if (error.status === 500 || error.status === "500")
               {
                   console.log("Error genèric - no troba les dades a la BD");
                   this.errorServer = true;
               }
               else {
                   return error.json();
               }
            })
            .subscribe(
                data => {
                    this.profes = data;
                    // java ens retona un array amb professor/s o un array buit, per tant s'ha de mirar la llargada de l'array per saber si hi ha profes
                    if(data.length == 0) {
                        this.error = true;
                    }
                },
                () => this.finished = true
            );
            this.error = false;
            this.errorServer = false;
            this.finished = false;
    }


    consultarProfePhp() {
        this.professorService.consultarProfePhp(this.idProfe)
            .subscribe(
                data => {
                    this.profes = data;
                    this.profes = Array.of(this.profes); // després de llegir el JSON al service el transformem en un array
                    console.log(this.profes);
                }
            );
    }


    consultar_f() {
        this.professorService.consultar()
            .subscribe(
                data => (this.consultardades = data)
            );
    }

}
