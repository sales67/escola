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

    error;
    errorServer;
    finished;

    constructor(private professorService: ProfessorService) { }

    //ngOnInit() { this.profes=[]; this.profes['nom']=""; this.profes['cognoms']="";}
    ngOnInit() { }


    consultarProfeJava() {
        this.professorService.consultarProfeJava(this.idProfe)
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
