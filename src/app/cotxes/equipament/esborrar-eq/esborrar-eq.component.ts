<<<<<<< HEAD
﻿import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
>>>>>>> 3ba15fe7feee2a058b9549cb6518d42e87a5d02c
import { Equipament } from '../equipament';
import { EquipamentService } from '../equipament.service';

import { DeleteComponent } from '../../client/delete/delete.component';
import { DeleteService } from '../../client/delete/delete.service';

@Component({
  selector: 'app-esborrar-eq',
  templateUrl: './esborrar-eq.component.html',
  styleUrls: ['./esborrar-eq.component.css'],
  providers: [EquipamentService, DeleteComponent, DeleteService]
})
//export class EsborrarEQComponent implements OnInit {
export class EsborrarEQComponent {
    
    idEq2: number;
    idModel: number;
    missatge_del: string;
    error_del: string;
    missatge_del_model: string;
    error_del_model: string;
    result: string;
    delClient;
    errorServer;
    errorBuit;
    finished;
    data;
    del_client;

    constructor( private equipamentService: EquipamentService, private deleteComponent: DeleteComponent, private deleteService: DeleteService) { }

<<<<<<< HEAD
    @ViewChild(DeleteMarcaComponent) funcions: DeleteMarcaComponent;
    
    // ngOnInit() { }
    ngAfterViewInit() {
        this.funcions.deleteMarca();
=======
    @ViewChild(DeleteComponent) DeleteComponent;
    deleteClient(){
        this.deleteService.deleteClient(this.del_client)
        .catch((error: any) => { 
                console.log(error.status);
               if (error.status === 0 || error.status === "0") {
                   console.log("Servidor Parat"); 
                    this.errorServer=true;
                    }   
                else if (error.status === 400 || error.status === "400")
                    {                        
                        this.errorBuit = true; 
                    }
                else if (error.status === 500 || error.status === "500")
                    {
                        this.errorBuit = true; 
                    }
                else {                    
                   return error.json();                    
                }            
        }).subscribe(
          value => this.data=value,
          error => {},
          () => {
              this.deleteComponent.deleteButton();
              this.finished = true;              
          }            
      );        
        this.errorServer=false;
        this.errorBuit=false;
        this.finished=false;
>>>>>>> 3ba15fe7feee2a058b9549cb6518d42e87a5d02c
    }
    
    
    /*delEq() {
        this.equipamentService.esborrarEq(this.idEq2)
        .subscribe(
            data => { this.idEq2 = data; },
            error => { this.error_del = "No s'ha pogut esborrar l'equipament " + this.idEq2; },
            // suc => { this.missatge = "S'ha esborrat l'equipament " + this.idEq2; },
            () => { this.missatge_del = ""; this.error_del = ""; }
        );
    }*/

    delEq() {
        this.equipamentService.esborrarEq(this.idEq2)
            .catch((error: any) => { 
                console.log(error.status);
                if (error.status === 0 || error.status === "0") {
                    console.log("Servidor aturat"); 
                    this.errorServer = true;
                }   
                else if (error.status === 400 || error.status === "400")
                {                        
                    this.errorBuit = true; 
                }
                else if (error.status === 500 || error.status === "500")
                {
                    this.errorBuit = true; 
                }
                else {     
                    this.finished = true;
                    return error.json();                    
                }            
        }).subscribe(
          value => this.data=value,
          error => {},
          () => {
              // this.deleteModelComponent.deleteByMarca(this.deleteId);
              // this.finished = true;              
          }            
      );
        this.errorServer=false;
        this.errorBuit=false;
        this.finished=false;  
     }
    
    delEqModel(model) {
        model = model || this.idModel;
        // this.equipamentService.esborraEqXidModel(this.idModel)
        this.equipamentService.esborraEqXidModel(model)
        .subscribe(
            data => { this.idModel = data; },
            error => { this.error_del_model = "No s'han pogut esborrar els equipaments del model " + this.idModel; },
            // suc => { this.missatge = "S'ha esborrat l'equipament " + this.idEq2; },
            () => { this.missatge_del_model = ""; this.error_del_model = ""; }
        );
    }
}
