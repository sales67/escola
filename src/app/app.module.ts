// Las aplicaciones Angular2 están pensadas para crecer, para ello es fundamental cierto grado de modularidad

// Un módulo no es más que una clase contenedora

// se define mediante una clase decorada con @NgModule

// Cada módulo puede incluir múltiples componentes y servicios

// Normalmente un módulo dependerá de otros

// Toda aplicación de Angular tiene al menos un módulo de Angular, el módulo principal (o root module).

// El módulo raíz declara un componente especial para el arranque de la aplicación: El componente raíz


// Librerías de Angular
// Angular está empaquetado como una colección de librerías Javascript vinculadas a distintos paquetes npm.
// Así solo tienes que importar lo que realmente necesitas y consigues una web más ligera.
// Las librerías principales de Angular (siempre comienzan por @angular) son:

    // @angular/core
    // @angular/platform-browser
    // @angular/router
    // @angular/forms
    // @angular/http

//  Para importar los elementos Component y Directive de @angular/core, import { Component, Directive } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolaModule } from './escola/escola.module';
import { FormulariComponent } from './formulari/formulari.component'; // cal??


// NgModule es un decorador que recibe un objeto de metadatos que definen el módulo 
// Los metadatos más importantes de un NgModule son:
    // - declarations: Las vistas que pertenecen a tu módulo. Hay 3 tipos de clases de tipo vista: componentes, directivas y pipes
    // - exports: Conjunto de declaraciones que deben ser accesibles para templates de componentes de otros módulos
    // - imports: Otros NgModules, cuyas clases exportadas son requeridas por templates de componentes de este módulo
    // - providers: Los servicios que necesita este módulo, y que estarán disponibles para toda la aplicación.
    // - bootstrap: Define la vista raíz. Utilizado solo por el root module.

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
