import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AlumneComponent } from './escola/alumne/alumne.component';
import { ListAlumneIdComponent } from './escola/alumne/listAlumne/listAlumneId/listAlumneId.component';
import { ListAlumneAllComponent } from './escola/alumne/listAlumne/listAlumneAll/listAlumneAll.component';
import { ListAlumneComponent } from './escola/alumne/listAlumne/listAlumne.component';



import { CursComponent } from './escola/curs/curs.component';
import { DelCursComponent } from './escola/curs/delCurs/delCurs.component';
import { PutCursComponent } from './escola/curs/putCurs/putCurs.component';
import { AddCursComponent } from './escola/curs/addCurs/addCurs.component';
import { ListCursComponent } from './escola/curs/listCurs/listCurs.component';

import { ProfessorComponent } from './escola/professor/professor.component';

import { EsportComponent } from './escola/professor/esport/esport.component';
import { CrearProfeComponent } from './escola/professor/crear-profe/crear-profe.component';

import { ConsultarProfeComponent } from './escola/professor/consultar-profe/consultar-profe.component';
import { ModificarProfeComponent } from './escola/professor/modificar-profe/modificar-profe.component';
import { EsborrarProfeComponent } from './escola/professor/esborrar-profe/esborrar-profe.component';

import {CentreComponent } from './escola/centre/centre.component';
import {addCentreComponent } from './escola/centre/addCentre/addCentre.component';
import {putCentreComponent } from './escola/centre/putCentre/putCentre.component';
import {delCentreComponent } from './escola/centre/delCentre/delCentre.component';
import {listCentreComponent } from './escola/centre/listCentre/listCentre.component';
import { PhpSergiComponent } from './escola/php/phpSergi/phpSergi.component';
import { PhpDavidComponent } from './escola/php/phpDavid/phpDavid.component';
import { FormulariComponent } from './formulari/formulari.component';


import { PhpJaumeCComponent } from './escola/php/phpJaumeC/phpJaumeC.component';
const routes: Routes = [
    {
   path: 'formulari',
    component: FormulariComponent,
    children: []
    },
  {
   path: 'phpSergi',
    component: PhpSergiComponent,
    children: []
    },
     {
   path: 'phpDavid',
    component: PhpDavidComponent,
    children: []
    },
   { path: 'phpJaumeC',
    component: PhpJaumeCComponent,
    children: []
    },
    {
    path: 'alumne',
    component: AlumneComponent,
    children: []
    },
    {
    path: 'listAlumne',
    component: ListAlumneComponent,
    children: []
    },
    {
    path: 'listAlumneAll',
    component: ListAlumneAllComponent,
    children: []
    }, 
    {
    path: 'listAlumneId',
    component: ListAlumneIdComponent,
    children: []
    }, 
  {
      path: 'curs',
      component: CursComponent,
      children: []
  },
  {
      path: 'addCurs',
      component: AddCursComponent,
  },    
  {
      path: 'putCurs',
      component: PutCursComponent,
  },    
  {
      path: 'delCurs',
      component: DelCursComponent,
  },   
  {
      path: 'listCurs',
      component: ListCursComponent,

  },   
    {
    path: 'professor',
    component: ProfessorComponent,
    children: []
  },
    {
    path: 'crear-profe',
    component: CrearProfeComponent,
    children: []
  },
    {
    path: 'consultar-profe',
    component: ConsultarProfeComponent,
    children: []
  },
    {
    path: 'modificar-profe',
    component: ModificarProfeComponent,
    children: []
  },
    {
    path: 'esborrar-profe',
    component: EsborrarProfeComponent,
    children: []
  },
   {
      path: 'centre',
      component: CentreComponent,
  },
  {
      path: 'listCentre',
      component: listCentreComponent,
  },
  {
      path: 'putCentre',
      component: putCentreComponent,
  },
  {
      path: 'delCentre',
      component: delCentreComponent,
  },
  {
      path: 'addCentre',
      component: addCentreComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
