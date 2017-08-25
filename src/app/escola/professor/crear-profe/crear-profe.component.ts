import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';

@Component({
    selector: 'app-crear-profe',
    templateUrl: './crear-profe.component.html',
    styleUrls: ['../../escola.css'], // ['./crear-profe.component.css']
    providers: [ProfessorService]
})
export class CrearProfeComponent implements OnInit {
    crearId: number;
    crearNom: string;
    crearCognoms: string;
    crearDni: string;
    crearCurs: number;
    crearData: Date;
    crearSexe;
    
    error;
    finished;
    errorBuit;
    errorServer;
    values;

    constructor(private professorService: ProfessorService) { }

    ngOnInit() {
        // this.getIdActual();
    }
    
    // funció per determinar l'ID més gran de professor
    getIdActual() {
        this.professorService.getIdActual()
            .subscribe(
                data => (this.crearId = data)
            );
    }

    crearProfe() {
        this.professorService.crearProfe(this.crearId, this.crearNom, this.crearCognoms, this.crearDni, this.crearCurs/*, this.crearData*/)
        .catch((error: any) => {
            
               if (error.status === 0 || error.status === "0") {
                    console.log("Servidor Aturat"); 
                    this.errorServer = true;
               }
                else if (error.status === 400 || error.status === "400")
               {
                   console.log("falten dades o són incorrectes"); 
                   this.errorBuit = true;
               }
                else if (error.status === 500 || error.status === "500")
               {
                   console.log("Error genèric - no troba les dades a la BD");
                   this.errorBuit = true;
               }
                else if (error.status === 503 || error.status === "503")
               {
                   console.log("Error de servidor");
                   this.errorServer = true;
               }
                else {
                    this.finished = true 
                   return error.json();
               }
        }).subscribe(
            value => this.values = value,
            error => {},
            () => this.finished = true 
        );
        
        this.finished = false;
        this.errorBuit=false;
        this.errorServer=false;
    }
}
