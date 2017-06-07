import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{AlumneComponent} from './escola/alumne/alumne.component';

import { ProfessorComponent } from './professor/professor.component';
import { EsportComponent } from './professor/esport/esport.component';
import { CrearProfeComponent } from './professor/crear-profe/crear-profe.component';
import { ConsultarProfeComponent } from './professor/consultar-profe/consultar-profe.component';
import { ModificarProfeComponent } from './professor/modificar-profe/modificar-profe.component';
import { EsborrarProfeComponent } from './professor/esborrar-profe/esborrar-profe.component';

const routes: Routes = [
  {
    path: 'alumne',
    component: AlumneComponent,
    children: []
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
