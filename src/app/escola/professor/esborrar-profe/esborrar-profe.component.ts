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

    constructor(private professorService: ProfessorService) { }

    ngOnInit() {
        const selectCamp = <HTMLInputElement>document.body.querySelector('#selectCamp');
        const delValor = <HTMLElement>document.body.querySelector('#delValor');
        const delValorData = <HTMLElement>document.body.querySelector('#delValorData');
        
        selectCamp.addEventListener('change', () => {

            switch (selectCamp.value) {
                case 'naixement':
                    delValorData.hidden = false;
                    delValor.hidden = true;
                    break;
                default:
                    delValor.hidden = false;
                    delValorData.hidden = true;
                    break;
            }
        });
    }
    
    // esborrarProfe2(){
    esborrarProfe(){
        // this.professorService.esborrarProfe2(this.delProfe)
        this.professorService.esborrarProfe(this.camp, this.nouValor)
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