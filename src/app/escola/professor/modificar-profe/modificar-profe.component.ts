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
        {value: 'curs', display: 'Curs'}
    ];

    camp: string;
    nouValor;
    idProfeMod;

    constructor(private professorService: ProfessorService) { }

    ngOnInit() {

        const selectCamp = <HTMLInputElement>document.body.querySelector('#selectCamp');
        const modValor = <HTMLElement>document.body.querySelector('#modValor');
        const modValorData = <HTMLElement>document.body.querySelector('#modValorData');

        selectCamp.addEventListener('change', () => {
            if (selectCamp.value === 'naixement') {
                modValor.hidden = true;
                modValorData.hidden = false;
            } else {
                modValor.hidden = false;
                modValorData.hidden = true;
            }
        });
    }

    modProfe() {
        // console.log("data es: " + this.nouValor + ", tipus: " + typeof(this.nouValor))
        this.professorService.modProfe(this.idProfeMod, this.camp, this.nouValor)
            .subscribe(
                data => (this.idProfeMod = data),
                () => console.log('Professor amb id ' + this.idProfeMod + ' modificat')
            );
    }

}
