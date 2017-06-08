import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';

@Component({
    selector: 'app-consultar-profe',
    templateUrl: './consultar-profe.component.html',
    styleUrls: ['../../escola.css'], // ['./consultar-profe.component.css']
    providers: [ ProfessorService ]
})
export class ConsultarProfeComponent implements OnInit {

    idProfe: number;
    profes;
    index = 1;
    comptador = 1;
    boolDni = false;

    constructor(private professorService: ProfessorService) { }

    ngOnInit() { }

    consultarProfe() {
        this.professorService.consultarProfe(this.idProfe)
            .subscribe(
                data => (this.profes = data)
                // err => console.error(err),
                // () => console.log("done")
            );
    }
}
