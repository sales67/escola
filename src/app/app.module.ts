// Las aplicaciones Angular2 están pensadas para crecer, para ello es fundamental cierto grado de modularidad

// Un módulo no es más que una clase contenedora

// Cada módulo puede incluir múltiples componentes y servicios

// Normalmente un módulo dependerá de otros

// El módulo raíz declara un componente especial para el arranque de la aplicación: El componente raíz


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolaModule } from './escola/escola.module';
import { FormulariComponent } from './formulari/formulari.component'; // cal??


@NgModule({
  declarations: [
    AppComponent,
    FormulariComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EscolaModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
