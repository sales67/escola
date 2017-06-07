import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms'


import {AlumneComponent} from './alumne/alumne.component';
import { ProfessorComponent } from './professor/professor.component';
import { EsportComponent } from './professor/esport/esport.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AlumneComponent,
      ProfessorComponent,
      EsportComponent
  ]
})
export class EscolaModule { }

