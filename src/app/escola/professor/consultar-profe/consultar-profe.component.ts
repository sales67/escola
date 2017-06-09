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
    boolDni = false;

    constructor(private professorService: ProfessorService) { }

    ngOnInit() { }

    consultarProfeJava() {
        this.professorService.consultarProfeJava(this.idProfe)
            .subscribe(
                data => (this.profes = data)
                // err => console.error(err),
                // () => console.log("done")
            );
    }

    consultarProfePhp() {
        this.professorService.consultarProfePhp(this.idProfe)
            .subscribe(
                // data => (this.profes = data)
                data => {
                    this.profes = data;
                    this.profes = Array.of(this.profes); // després de llegir el JSON al service el transformem en un array
                }
            );
    }

    consultar_f() {
        this.professorService.consultar()
            .subscribe(
                data => (this.consultardades = data)
            );
        
        //this.http.get('http://localhost/usuaris/')
            //.subscribe(res => this.data = res.json());
        //.subscribe(res => this.dades = res.text());
    }
}
