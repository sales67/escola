import { Component, OnInit } from '@angular/core';
import { Equipament } from '../equipament';
import { EquipamentService } from '../equipament.service';
// import { Response}  from '@angular/http';

@Component({
  selector: 'app-crear-eq',
  templateUrl: './crear-eq.component.html',
  styleUrls: ['./crear-eq.component.css'],
  providers: [EquipamentService]
})
export class CrearEQComponent implements OnInit {

    crearNom: string = "";
    crearCombustible: string;
    crearPotencia: number;
    crearTraccio: string;
    crearClimatitzador: boolean;
    crearLlantes17: boolean;
    crearLlantes18: boolean;
    crearLlantes19: boolean;
    crearNavegador: boolean;
    crearPintura: boolean;
    crearMulti6: boolean;
    crearMulti9: boolean;
    crearPreu: number;
    
    min_potencia = 50;
    max_potencia = 1500;
    min_preu = 1;
    max_preu = 20000;
    
    missatge_crear: string;
    
    error;
    errorBuit;
    errorServer;
    finished;
    values;
    
    public combustibles = [
        { value: 'Gasolina', display: 'Gasolina' },
        { value: 'Diesel', display: 'Diesel' },
        { value: 'GNC', display: 'Gas' },
        { value: 'Hibrid', display: 'Híbrid' },
        { value: 'Electric', display: 'Elèctric' }
    ];

    public traccions = [
        { value: 'Davantera', display: 'Davantera' },
        { value: 'Posterior', display: 'Posterior' },
        { value: 'Total', display: 'Total' }
    ];

    constructor( private equipamentService: EquipamentService) { }

    ngOnInit() {
        let llantes17 = <HTMLInputElement>document.body.querySelector("#crearLlantes17");
        let llantes18 = <HTMLInputElement>document.body.querySelector("#crearLlantes18");
        let llantes19 = <HTMLInputElement>document.body.querySelector("#crearLlantes19");
        // let llantes19 = <HTMLInputElement>document.getElementById("crearLlantes19");
        
        let multi6 = <HTMLInputElement>document.body.querySelector("#crearMulti6");
        let multi9 = <HTMLInputElement>document.body.querySelector("#crearMulti9");
        
        llantes17.addEventListener("click", () => {
            llantes18.checked = false;
            llantes19.checked = false;
        })
        
        llantes18.addEventListener("click", () => {
            llantes17.checked = false;
            llantes19.checked = false;
        })
        
        llantes19.addEventListener("click", () => {
            llantes17.checked = false;
            llantes18.checked = false;
        })
        
        multi6.addEventListener("click", () => {
            multi9.checked = false;
        })
        
        multi9.addEventListener("click", () => {
            multi6.checked = false;
        })
        
        this.crearClimatitzador = false;
        this.crearLlantes17 = false;
        this.crearLlantes18 = false;
        this.crearLlantes19 = false;
        this.crearNavegador = false;
        this.crearPintura = false;
        this.crearMulti6 = false;
        this.crearMulti9 = false;
        this.crearPotencia;
        this.crearPreu;
    }

    esNomValid() {
        let regex = /^[a-zA-Z0-9_-]{3,15}/;
        return(regex.test(this.crearNom));
    }

    isNumber(val) { return typeof val === 'number'; }

    crearEquipament() {
        this.equipamentService.crearEquipamentPost(this.crearNom, this.crearCombustible, this.crearPotencia, this.crearTraccio, this.crearClimatitzador,
                                                   this.crearLlantes17, this.crearLlantes18, this.crearLlantes19, this.crearNavegador, this.crearPintura,
                                                   this.crearMulti6, this.crearMulti9, this.crearPreu)
        .catch((error: any) => {  
            
               if (error.status === 0 || error.status === "0") {
                    console.log("Servidor Aturat"); 
                    this.errorServer = true;
               } else if (error.status === 400 || error.status === "400")
               {
                   console.log("error 400"); 
                   this.errorBuit = true;
               } else if (error.status === 500 || error.status === "500")
               {
                   console.log("error 500"); 
                   this.errorBuit = true;
               } else {
                   return error.json();
               }
        }).subscribe(
            value => this.values=value,
            //error => {},
            () => {console.log("finish es true"), this.finished = true}
        );
        
        this.error = false;
        this.finished = false;
        this.errorBuit=false;
        this.errorServer=false;
    }

}
