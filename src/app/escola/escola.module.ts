import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';



import { AlumneComponent } from './alumne/alumne.component';
import { AlumneModol } from './alumne/alumneModuls/alumne-modol';
import { ListAlumneIdComponent } from './alumne/listAlumne/listAlumneId/listAlumneId.component';
import { ListAlumneAllComponent } from './alumne/listAlumne/listAlumneAll/listAlumneAll.component';
import { ListAlumneComponent } from './alumne/listAlumne/listAlumne.component';


import { CursComponent } from './curs/curs.component';
import { DelCursComponent } from './curs/delCurs/delCurs.component';
import { PutCursComponent } from './curs/putCurs/putCurs.component';
import { AddCursComponent } from './curs/addCurs/addCurs.component';
import { ListCursComponent } from './curs/listCurs/listCurs.component';
import { CursModol } from './curs/cursModuls/curs-modol';


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
import { BotoComponent } from './professor/boto/boto.component';

import { PhpSergiComponent } from './php/phpSergi/phpSergi.component';
import { PhpDavidComponent } from './php/phpDavid/phpDavid.component';
<<<<<<< HEAD
=======

>>>>>>> 10da7584de74d11ba2dd98487437fbcea4922939
import { PhpJaumeCComponent } from './php/phpJaumeC/phpJaumeC.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AlumneModol,
      AlumneComponent,
      CursModol,
      
      PhpSergiComponent,
      PhpDavidComponent,
      PhpJaumeCComponent,
      ListAlumneIdComponent,
      ListAlumneAllComponent,
      ListAlumneComponent,      


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
      listCentreComponent,
      BotoComponent

  ]
})
export class EscolaModule { }

