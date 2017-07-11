import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';

//--------------------- SERGI

import { AlumneComponent } from './alumne/alumne.component';
import { AlumneModol } from './alumne/alumneModuls/alumne-modol';
import { AlumneToolsComponent } from './alumne/alumneTools/alumneTools.component';
import { ListAlumneIdComponent } from './alumne/alumneTools/listAlumne/listAlumneId/listAlumneId.component';
import { ListAlumneAllComponent } from './alumne/alumneTools/listAlumne/listAlumneAll/listAlumneAll.component';
import { ListAlumneComponent } from './alumne/alumneTools/listAlumne/listAlumne.component';
import { UpdateAlumneComponent } from './alumne/alumneTools/updateAlumne/updateAlumne.component';
import { DelAlumneComponent } from './alumne/alumneTools/delAlumne/delAlumne.component';
import { AddAlumneComponent } from './alumne/alumneTools/addAlumne/addAlumne.component';


import { HobbyModol } from './alumne/hobbyModuls/hobby-modol';
import { HobbyToolsComponent } from './alumne/hobbyTools/hobbyTools.component';
import { ListHobbyComponent } from './alumne/hobbyTools/listHobby/ListHobby.component';
import { ListHobbyAllComponent } from './alumne/hobbyTools/listHobby/listHobbyAll/ListHobbyAll.component';
import { ListHobbyIdComponent } from './alumne/hobbyTools/listHobby/listHobbyId/ListHobbyId.component';
import { DelHobbyComponent } from './alumne/hobbyTools/delHobby/delHobby.component';
import { AddHobbyComponent } from './alumne/hobbyTools/addHobby/addHobby.component';


import { FormulariComponent } from './alumne/formulari/formulari.component';
import { Step1Component } from './alumne/formulari/step1/step1.component';
import { Step2Component } from './alumne/formulari/step2/step2.component';


//-------------------------------

import { CursComponent } from './curs/curs.component';
import { DelCursComponent } from './curs/delCurs/delCurs.component';
import { PutCursComponent } from './curs/putCurs/putCurs.component';
import { AddCursComponent } from './curs/addCurs/addCurs.component';
import { ListCursComponent } from './curs/listCurs/listCurs.component';
import { CursModol } from './curs/cursModuls/curs-modol';
import { AddCursaulaComponent } from './curs/Cursaula/addCursaula.component';




import { ProfessorComponent } from './professor/professor.component';
import { EsportComponent } from './professor/esport/esport.component';
import { CrearProfeComponent } from './professor/crear-profe/crear-profe.component';
import { ConsultarProfeComponent } from './professor/consultar-profe/consultar-profe.component';
import { ModificarProfeComponent } from './professor/modificar-profe/modificar-profe.component';
import { EsborrarProfeComponent } from './professor/esborrar-profe/esborrar-profe.component';

import {CentreComponent } from './centre/centre.component';
import {addCentreComponent } from './centre/addCentre/addCentre.component';
import {addLocalitatComponent} from './centre/addLocalitat/addLocalitat.component';
import {putCentreComponent } from './centre/putCentre/putCentre.component';
import {delCentreComponent } from './centre/delCentre/delCentre.component';
import {listCentreComponent } from './centre/listCentre/listCentre.component';
import { BotoComponent } from './professor/boto/boto.component';

import { PhpSergiComponent } from './php/phpSergi/phpSergi.component';
import { PhpDavidComponent } from './php/phpDavid/phpDavid.component';

import { PhpJaumeCComponent } from './php/phpJaumeC/phpJaumeC.component';

import { JsDavidComponent } from './JS/JsDavid/JsDavid.component';
import { JsSergiComponent } from './JS/JsSergi/JsSergi.component';
import { JsJaumeMComponent } from './JS/JsJaumeM/JsJaumeM.component';
import { JsJaumeCComponent } from './JS/JsJaumeC/JsJaumeC.component';

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
      
      //---------PHP
      
      PhpSergiComponent,
      PhpDavidComponent,
      PhpJaumeCComponent,
      
      //------------SERGI
      
      ListAlumneIdComponent,
      ListAlumneAllComponent,
      ListAlumneComponent,
      AddAlumneComponent,
      DelAlumneComponent,
      UpdateAlumneComponent,
      AlumneToolsComponent,
      

      HobbyToolsComponent,
      ListHobbyComponent,
      ListHobbyAllComponent,
      ListHobbyIdComponent,
      AddHobbyComponent,
      DelHobbyComponent,
      
      FormulariComponent,
      Step1Component,
      Step2Component,
      
      //-----------------

      CursComponent,
      DelCursComponent,
      ListCursComponent,
      AddCursComponent,
      PutCursComponent,
      AddCursaulaComponent,
      
      JsDavidComponent,
      JsJaumeCComponent,
      JsJaumeMComponent,
      JsSergiComponent,
      

      ProfessorComponent,
      EsportComponent,
      CrearProfeComponent,
      ConsultarProfeComponent,
      ModificarProfeComponent,
      EsborrarProfeComponent,

      CentreComponent,
      addCentreComponent,
      addLocalitatComponent,
      putCentreComponent,
      delCentreComponent,
      listCentreComponent,
      BotoComponent

  ]
})
export class EscolaModule { }

