import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumneComponent } from './escola/alumne/alumne.component';
import { CursComponent } from './escola/curs/curs.component';
import { DelCursComponent } from './escola/curs/delCurs/delCurs.component';
import { PutCursComponent } from './escola/curs/putCurs/putCurs.component';
import { AddCursComponent } from './escola/curs/addCurs/addCurs.component';
import { ListCursComponent } from './escola/curs/listCurs/listCurs.component';

import { ProfessorComponent } from './escola/professor/professor.component';

import { EsportComponent } from './escola/professor/esport/esport.component';
import { CrearProfeComponent } from './escola/professor/crear-profe/crear-profe.component';
<<<<<<< HEAD


=======
>>>>>>> d730cba4965f4a1e559c75ac0f664bc750c25bdc
import { ConsultarProfeComponent } from './escola/professor/consultar-profe/consultar-profe.component';
import { ModificarProfeComponent } from './escola/professor/modificar-profe/modificar-profe.component';
import { EsborrarProfeComponent } from './escola/professor/esborrar-profe/esborrar-profe.component';

const routes: Routes = [
  {
    path: 'alumne',
    component: AlumneComponent,
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
