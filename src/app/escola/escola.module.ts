import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';



import { AlumneComponent } from './alumne/alumne.component';
import { CursComponent } from './curs/curs.component';
import { DelCursComponent } from './curs/delCurs/delCurs.component';
import { PutCursComponent } from './curs/putCurs/putCurs.component';
import { AddCursComponent } from './curs/addCurs/addCurs.component';
import { ListCursComponent } from './curs/listCurs/listCurs.component';


import { ProfessorComponent } from './professor/professor.component';
import { EsportComponent } from './professor/esport/esport.component';
import { CrearProfeComponent } from './professor/crear-profe/crear-profe.component';
import { ConsultarProfeComponent } from './professor/consultar-profe/consultar-profe.component';
import { ModificarProfeComponent } from './professor/modificar-profe/modificar-profe.component';
import { EsborrarProfeComponent } from './professor/esborrar-profe/esborrar-profe.component';

import {CentreComponent } from './centre/centre.component';
import {addCentreComponent } from './centre/addCentre/addCentre.component';
import {putCentreComponent } from './centre/putCentre/putCentre.component';
import {delCentreComponent } from './centre/delCentre/delCentre.component';
import {listCentreComponent } from './centre/listCentre/listCentre.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AlumneComponent,

      CursComponent,
      DelCursComponent,
      ListCursComponent,
      AddCursComponent,
      PutCursComponent,
      

      ProfessorComponent,
      EsportComponent,
      CrearProfeComponent,
      ConsultarProfeComponent,
      ModificarProfeComponent,
      EsborrarProfeComponent,

      CentreComponent,
      addCentreComponent,
      putCentreComponent,
      delCentreComponent,
      listCentreComponent

  ]
})
export class EscolaModule { }

