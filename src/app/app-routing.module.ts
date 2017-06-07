import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{AlumneComponent} from './escola/alumne/alumne.component';

const routes: Routes = [
  {
    path: 'alumne',
    component: AlumneComponent,
    children: []
  },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
