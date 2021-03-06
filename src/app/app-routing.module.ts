import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//------------------------SERGI


import { AlumneComponent } from './escola/alumne/alumne.component';
import { AlumneToolsComponent } from './escola/alumne/alumneTools/alumneTools.component';
import { ListAlumneIdComponent } from './escola/alumne/alumneTools/listAlumne/listAlumneId/listAlumneId.component';
import { ListAlumneAllComponent } from './escola/alumne/alumneTools/listAlumne/listAlumneAll/listAlumneAll.component';
import { ListAlumneComponent } from './escola/alumne/alumneTools/listAlumne/listAlumne.component';
import { UpdateAlumneComponent } from './escola/alumne/alumneTools/updateAlumne/updateAlumne.component';
import { DelAlumneComponent } from './escola/alumne/alumneTools/delAlumne/delAlumne.component';
import { AddAlumneComponent } from './escola/alumne/alumneTools/addAlumne/addAlumne.component';


import { HobbyToolsComponent } from './escola/alumne/hobbyTools/hobbyTools.component';
import { ListHobbyComponent } from './escola/alumne/hobbyTools/listHobby/ListHobby.component';
import { ListHobbyAllComponent } from './escola/alumne/hobbyTools/listHobby/listHobbyAll/ListHobbyAll.component';
import { ListHobbyIdComponent } from './escola/alumne/hobbyTools/listHobby/listHobbyId/ListHobbyId.component';
import { AddHobbyComponent } from './escola/alumne/hobbyTools/addHobby/addHobby.component';
import { DelHobbyComponent } from './escola/alumne/hobbyTools/delHobby/delHobby.component';

import { FormulariComponent } from './escola/alumne/formulari/formulari.component';



//---------------------------------

import { CursComponent } from './escola/curs/curs.component';
import { DelCursComponent } from './escola/curs/delCurs/delCurs.component';
import { PutCursComponent } from './escola/curs/putCurs/putCurs.component';
import { AddCursComponent } from './escola/curs/addCurs/addCurs.component';
import { ListCursComponent } from './escola/curs/listCurs/listCurs.component';
import { AddCursaulaComponent } from './escola/curs/Cursaula/addCursaula.component';

import { ProfessorComponent } from './escola/professor/professor.component';

import { EsportComponent } from './escola/professor/esport/esport.component';
import { CrearProfeComponent } from './escola/professor/crear-profe/crear-profe.component';

import { ConsultarProfeComponent } from './escola/professor/consultar-profe/consultar-profe.component';
import { ModificarProfeComponent } from './escola/professor/modificar-profe/modificar-profe.component';
import { EsborrarProfeComponent } from './escola/professor/esborrar-profe/esborrar-profe.component';

import {CentreComponent } from './escola/centre/centre.component';
import {addCentreComponent } from './escola/centre/addCentre/addCentre.component';
import {addLocalitatComponent} from './escola/centre/addLocalitat/addLocalitat.component';
import {putCentreComponent } from './escola/centre/putCentre/putCentre.component';
import {delCentreComponent } from './escola/centre/delCentre/delCentre.component';
import {listCentreComponent } from './escola/centre/listCentre/listCentre.component';
import { PhpSergiComponent } from './escola/php/phpSergi/phpSergi.component';
import { PhpDavidComponent } from './escola/php/phpDavid/phpDavid.component';


//import { FormulariComponent } from './formulari/formulari.component';

import { PhpJaumeCComponent } from './escola/php/phpJaumeC/phpJaumeC.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './escola/home/home.component';

const routes: Routes = [
    {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    },
    {
    path: 'home',
    component: HomeComponent,    
    children: []
    },
    {
   path: 'login',
    component: LoginComponent,
    children: []
    },    
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
    path: 'addHobby',
    component: AddHobbyComponent,
    children: []
    },
    {
    path: 'delHobby',
    component: DelHobbyComponent,
    children: []
    },
    {
    path: 'addHobby',
    component: AddHobbyComponent,
    children: []
    },
    {
    path: 'listHobbyId',
    component: ListHobbyIdComponent,
    children: []
    },
    {
    path: 'listHobbyAll',
    component: ListHobbyAllComponent,
    children: []
    },
    {
    path: 'listHobby',
    component: ListHobbyComponent,
    children: []
    },
    {
    path: 'hobbyTools',
    component: HobbyToolsComponent,
    children: []
    },
    {
    path: 'alumne',
    component: AlumneComponent,
    children: []
    },
    {
    path: 'alumneTools',
    component: AlumneToolsComponent,
    children: []
    },{
    path: 'updateAlumne',
    component: UpdateAlumneComponent,
    children: []
    },{
    path: 'delAlumne',
    component: DelAlumneComponent,
    children: []
    },{
    path: 'addAlumne',
    component: AddAlumneComponent,
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
    }, {
    path: 'formulariS',
    component: FormulariComponent,
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
      path: 'cursaula',
      component: AddCursaulaComponent,
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
  },
  {
      path: 'addLocalitat',
      component: addLocalitatComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
