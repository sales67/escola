import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { BotoComponent } from '../boto/boto.component';

@Component({
    selector: 'app-esborrar-profe',
    templateUrl: './esborrar-profe.component.html',
    styleUrls: ['../../escola.css'],
    providers: [ ProfessorService ]
})
export class EsborrarProfeComponent implements OnInit {
    
    delProfe: number;
    finished;
    errorServer;
    errorBuit;
    values;

    constructor(private professorService: ProfessorService) { }

    ngOnInit() { }
    
    esborrarProfe(){
        this.professorService.esborrarProfe(this.delProfe)
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