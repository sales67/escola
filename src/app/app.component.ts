import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { HomeService } from './home/home.service';

// Función decoradora que registra un componente
// Lo que hace es asociar al controlador una plantilla HTML app.component.html y un selector para ser invocado desde otra vista <app-root></app-root>.
@Component({
  selector: 'app-root',                 // elemento html consumidor
  templateUrl: './app.component.html',  // ruta relativa a la vista
  styleUrls: ['./app.component.css'],   // potencialmente múltiples hojas de estilo
  providers: [ HomeService ]
})
// Esta clase es todo lo que se exporta en este fichero
// y esto se importará en app.module.ts para ser incorporado al módulo raíz
export class AppComponent{
    // las propiedades de la clase representan el modelo de datos
    // son accesibles desde la vista
    title = 'Escola Otaku';
    prova;
    logged=true;

    constructor(private http:Http){}

    getProva() {
      this.prova = this.http.get("http://localhost:8080/helloWorld/world")
        .map(res => res.text())
        .subscribe(
            value => this.prova = value,
            error => {},
        );        
    }        
}

