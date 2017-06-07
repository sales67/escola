import { Component, OnInit } from '@angular/core';
import { Equipament } from '../equipament';
import { EquipamentService } from '../equipament.service';

@Component({
  selector: 'app-consultar-eq',
  templateUrl: './consultar-eq.component.html',
  styleUrls: ['./consultar-eq.component.css'],
  providers: [
      EquipamentService
  ]
})
export class ConsultarEQComponent implements OnInit {

    idEq: number;
    equipament: Equipament;
    public equipaments3: Array<Equipament> = [];
    public equipaments2: Array<Equipament> = [];
    errors: string;
    totb: string;
    
    error;
    // equipaments3;
    finished;
    
    idModel;
    nomModel: string;
    marcaImodel: Array<String> = [];
    
    constructor( private equipamentService: EquipamentService) { }
    
    ngOnInit() {
        // this.equipament = this.equipamentService.equipamentBuit();
        //this.equipaments3[0] = {id: 0, name: '', combustible: '', potencia: 0, traccio: '', climatitzador: false, llantes17: false, llantes18: false, llantes19: false, navegador: false, pintura: false, multimedia6: false, multimedia9: false, preu: 0};
    }
    
    trobaEquipament() {
        // let idModel = this.equipamentService.getIdModel(this.idEq);
        
        // console.log("id model: " + idModel)
        
        this.equipamentService.getEq(this.idEq)
            .subscribe(
                value => { 
                    this.equipaments3 = value;
                    console.log("array equipament: ");
                    console.log(this.equipaments3);
                    // if (this.equipaments3 == null)
                    if (this.equipaments3.length == 0)
                    {
                        console.log("Error! llargada array equipament és 0");
                        this.error = true;
                    }
            },
            error => this.error = true,
            () => this.finished = true
                // data => { this.equipaments = data; this.nomModel = this.equipamentService.funcioJaume(data[0].model); }, 
                /*data => { this.equipaments = data; this.marcaImodel = this.equipamentService.funcioJaume(data[0].model); }, // data => { this.equipament = data; console.log(data); },
                err => { this.errors = "S'ha produit un error, prova amb un altre ID."; },
                () => { console.log('done'); this.errors = ""; } // hi ha de ser, sinó no es mostra el missatge d'error quan falla..*/
            );
            this.error = false;
            this.finished = false;
    }
    
    trobaEquipaments() {
        this.equipamentService.getEqs()
                .subscribe(
                    data => { this.equipaments2 = data; console.log(data); },
                    err => console.error(err),
                    () => console.log('done')
        );
    }
    
    trobaIdModel() {
        this.equipamentService.getIdModel(this.idEq)
            .subscribe(
                data => { this.equipaments3 = data; console.log(data); }, // data => { this.equipament = data; console.log(data); },
                err => {console.error(err); this.errors = "S'ha produit un error, prova amb un altre ID.";},
                () => {console.log('done'); this.totb = "ok";}
            );
    }
    
    trobaMarcaImodel() {
        
    }
}
