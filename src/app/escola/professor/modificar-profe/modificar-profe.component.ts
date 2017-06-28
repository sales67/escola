import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { BotoComponent } from '../boto/boto.component';

@Component({
    selector: 'app-modificar-profe',
    templateUrl: './modificar-profe.component.html',
    styleUrls: ['../../escola.css'],
    providers: [ ProfessorService ]
})
export class ModificarProfeComponent implements OnInit {

    public camps = [
        {value: 'nom', display: 'Nom'},
        {value: 'cognoms', display: 'Cognoms'},
        {value: 'dni', display: 'DNI'},
        {value: 'naixement', display: 'Data de naixement'},
        {value: 'sexe', display: 'Sexe'},
        {value: 'curs', display: 'Curs'},
        {value: 'esport', display: 'Esport'}
    ];

    public esports = [];

    camp: string;
    nouValor;
    idProfeMod;

    finished;
    errorId;
    errorServer;

    retorn;

    constructor(private professorService: ProfessorService) { }

    ngOnInit() {

        const selectCamp = <HTMLInputElement>document.body.querySelector('#selectCamp');
        const modValor = <HTMLElement>document.body.querySelector('#modValor');
        const modValorData = <HTMLElement>document.body.querySelector('#modValorData');
        const selectSexe = <HTMLInputElement>document.body.querySelector('#selectSexe');
        const selectEsport = <HTMLInputElement>document.body.querySelector('#selectEsport');
        const modEsport = <HTMLElement>document.body.querySelector('#modEsport');

        selectCamp.addEventListener('change', () => {

            switch (selectCamp.value) {
                case 'naixement':
                    modValorData.hidden = false;
                    modValor.hidden = true;
                    modEsport.hidden = true;
                    selectSexe.hidden = true;
                    break;
                case 'esport':
                    modEsport.hidden = false;
                    modValorData.hidden = true;
                    modValor.hidden = true;
                    selectSexe.hidden = true;
                    break;
                case 'sexe':
                    selectSexe.hidden = false;
                    modEsport.hidden = true;
                    modValorData.hidden = true;
                    modValor.hidden = true;
                    break;
                default:
                    modValor.hidden = false;
                    modEsport.hidden = true;
                    modValorData.hidden = true;
                    selectSexe.hidden = true;
                    break;
            }
        });

        // funció automàtica per saber tots els esports
        this.professorService.consultarEsports()
            .subscribe(
                data => {
                    (this.esports = data);
                }
            );
    }


    modProfe() {
        this.professorService.modProfe(this.idProfeMod, this.camp, this.nouValor)
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
                    this.retorn = data;
                    // java ens retona un array amb professor/s o un array buit, per tant s'ha de mirar la llargada de l'array per saber si hi ha profes
                    if(this.retorn == 1) {
                        this.errorId = true;
                    }
                },error => {}, // si no el posem no es veuen els missatges d'error o exit a la pantalla
                () => this.finished = true
            );
            this.errorId = false;
            this.errorServer = false;
            this.finished = false;
    }

}
