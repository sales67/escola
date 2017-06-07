import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { MarcaComponent } from './marca/marca.component';
import { EquipamentComponent } from './equipament/equipament.component';
import { ModelComponent } from './model/model.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddMarcaComponent } from './marca/addMarca/addMarca.component';
import { UpdateMarcaComponent } from './marca/updateMarca/updateMarca.component';
import { DeleteMarcaComponent } from './marca/deleteMarca/deleteMarca.component';
import { ListMarcaComponent } from './marca/listMarca/listMarca.component';
import { FormsModule } from '@angular/forms';
import { HttpModule,Http} from '@angular/http';
import { RegistComponent } from './client/regist/regist.component';
import { UpdateComponent } from './client/update/update.component';
import { DeleteComponent } from './client/delete/delete.component';
import { CrearEQComponent } from './equipament/crear-eq/crear-eq.component';
import { ConsultarEQComponent } from './equipament/consultar-eq/consultar-eq.component';
import { ModificarEQComponent } from './equipament/modificar-eq/modificar-eq.component';
//import { EsborrarEQComponent } from './equipament/esborrar-eq/esborrar-eq.component';

import {AppRoutingModule} from '../app-routing.module';
import { InformacioComponent } from './informacio/informacio.component';


import { ListMarcaIdComponent } from './marca/listMarca/listMarcaId/listMarcaId.component';
import { ListMarcaNameComponent } from './marca/listMarca/listMarcaName/listMarcaName.component';
import {ListMarcaAllComponent} from './marca/listMarca/listMarcaAll/listMarcaAll.component';
import { InformacioEmpresaComponent } from './informacio/informacio-empresa/informacio-empresa.component';
import { NoticiesComponent } from './informacio/noticies/noticies.component';
import { ContacteComponent } from './informacio/informacio-empresa/contacte/contacte.component';
import { UbicacioComponent } from './informacio/informacio-empresa/ubicacio/ubicacio.component';

import { addModelComponent } from './model/add-model/addModel.component';
import { deleteModelComponent } from './model/delete-model/deleteModel.component';
import { listModelComponent } from './model/list-model/listModel.component';
import { updateModelComponent } from './model/update-model/updateModel.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      ClientComponent,
      MarcaComponent,
      EquipamentComponent,
      ModelComponent,


      RegistComponent,
      UpdateComponent,
      DeleteComponent,


      RegistComponent,
      UpdateComponent,
      DeleteComponent,

      AddMarcaComponent,
      UpdateMarcaComponent,
      ListMarcaComponent,
      ListMarcaIdComponent,
      ListMarcaNameComponent, 
      ListMarcaAllComponent,


      DeleteMarcaComponent,      
      InformacioComponent,

       addModelComponent,
       deleteModelComponent,
       listModelComponent,
       updateModelComponent,

      InformacioEmpresaComponent,
      NoticiesComponent,
      ContacteComponent,
      UbicacioComponent

  ]
})
export class CotxesModule { }


