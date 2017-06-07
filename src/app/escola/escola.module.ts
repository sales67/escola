import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';


<<<<<<< HEAD
import { AlumneComponent } from './alumne/alumne.component';
import { CursComponent } from './curs/curs.component';
import { DelCursComponent } from './curs/delCurs/delCurs.component';
import { PutCursComponent } from './curs/putCurs/putCurs.component';
import { AddCursComponent } from './curs/addCurs/addCurs.component';
import { ListCursComponent } from './curs/listCurs/listCurs.component';

=======
import {AlumneComponent} from './alumne/alumne.component';
import { ProfessorComponent } from './professor/professor.component';
import { EsportComponent } from './professor/esport/esport.component';
import { CrearProfeComponent } from './professor/crear-profe/crear-profe.component';
import { ConsultarProfeComponent } from './professor/consultar-profe/consultar-profe.component';
import { ModificarProfeComponent } from './professor/modificar-profe/modificar-profe.component';
import { EsborrarProfeComponent } from './professor/esborrar-profe/esborrar-profe.component';
>>>>>>> 089bfaf7324cee0e22e6b5e5fadb84333323a5bb

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
      CursComponent,
      DelCursComponent,
      ListCursComponent,
      AddCursComponent,
      PutCursComponent
      
=======
      ProfessorComponent,
      EsportComponent,
      CrearProfeComponent,
      ConsultarProfeComponent,
      ModificarProfeComponent,
      EsborrarProfeComponent
>>>>>>> 089bfaf7324cee0e22e6b5e5fadb84333323a5bb
  ]
})
export class EscolaModule { }

