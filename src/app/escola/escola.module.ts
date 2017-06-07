import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';



<<<<<<< HEAD

=======
import { AlumneComponent } from './alumne/alumne.component';
>>>>>>> 879c3ed74244e5c98b2910d38285a7d20cc00608
import { CursComponent } from './curs/curs.component';
import { DelCursComponent } from './curs/delCurs/delCurs.component';
import { PutCursComponent } from './curs/putCurs/putCurs.component';
import { AddCursComponent } from './curs/addCurs/addCurs.component';
import { ListCursComponent } from './curs/listCurs/listCurs.component';


<<<<<<< HEAD
import {AlumneComponent} from './alumne/alumne.component';
=======
>>>>>>> 879c3ed74244e5c98b2910d38285a7d20cc00608
import { ProfessorComponent } from './professor/professor.component';
import { EsportComponent } from './professor/esport/esport.component';
import { CrearProfeComponent } from './professor/crear-profe/crear-profe.component';
import { ConsultarProfeComponent } from './professor/consultar-profe/consultar-profe.component';
import { ModificarProfeComponent } from './professor/modificar-profe/modificar-profe.component';
import { EsborrarProfeComponent } from './professor/esborrar-profe/esborrar-profe.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AlumneComponent,
<<<<<<< HEAD
=======

>>>>>>> 879c3ed74244e5c98b2910d38285a7d20cc00608
      CursComponent,
      DelCursComponent,
      ListCursComponent,
      AddCursComponent,
      PutCursComponent,
<<<<<<< HEAD
=======
      
>>>>>>> 879c3ed74244e5c98b2910d38285a7d20cc00608

      ProfessorComponent,
      EsportComponent,
      CrearProfeComponent,
      ConsultarProfeComponent,
      ModificarProfeComponent,
      EsborrarProfeComponent
<<<<<<< HEAD
=======

>>>>>>> 879c3ed74244e5c98b2910d38285a7d20cc00608
  ]
})
export class EscolaModule { }

