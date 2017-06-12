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
        {value: 'curs', display: 'Curs'},
        {value: 'esport', display: 'Esport'}
    ];

    public esports = [];

    camp: string;
    nouValor;
    idProfeMod;

    constructor(private professorService: ProfessorService) { }

    ngOnInit() {

        const selectCamp = <HTMLInputElement>document.body.querySelector('#selectCamp');
        const modValor = <HTMLElement>document.body.querySelector('#modValor');
        const modValorData = <HTMLElement>document.body.querySelector('#modValorData');
        const selectEsport = <HTMLInputElement>document.body.querySelector('#selectEsport');
        const modEsport = <HTMLElement>document.body.querySelector('#modEsport');

        selectCamp.addEventListener('change', () => {

            switch (selectCamp.value) {
                case 'naixement':
                    modValorData.hidden = false;
                    modValor.hidden = true;
                    modEsport.hidden = true;
                    break;
                case 'esport':
                    modEsport.hidden = false;
                    modValorData.hidden = true;
                    modValor.hidden = true;
                    break;
                default:
                    modValor.hidden = false;
                    modEsport.hidden = true;
                    modValorData.hidden = true;
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
            .subscribe(
                data => (this.idProfeMod = data),
                () => console.log('Professor amb id ' + this.idProfeMod + ' modificat')
            );
    }

}
