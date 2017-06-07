import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './cotxes/client/client.component';
import {AddMarcaComponent} from './cotxes/marca/addMarca/addMarca.component';
import {UpdateMarcaComponent} from './cotxes/marca/updateMarca/updateMarca.component';
import {ListMarcaComponent} from './cotxes/marca/listMarca/listMarca.component';
import {DeleteMarcaComponent} from './cotxes/marca/deleteMarca/deleteMarca.component';
import { MarcaComponent } from './cotxes/marca/marca.component';
import { ModelComponent } from './cotxes/model/model.component';

import { EquipamentComponent } from './cotxes/equipament/equipament.component';

import { RegistComponent } from './cotxes/client/regist/regist.component';
import { UpdateComponent } from './cotxes/client/update/update.component';
import { DeleteComponent } from './cotxes/client/delete/delete.component';

import { CrearEQComponent } from './cotxes/equipament/crear-eq/crear-eq.component';
import { ConsultarEQComponent } from './cotxes/equipament/consultar-eq/consultar-eq.component';
import { ModificarEQComponent } from './cotxes/equipament/modificar-eq/modificar-eq.component';
//import { EsborrarEQComponent } from './cotxes/equipament/esborrar-eq/esborrar-eq.component';
import {ListMarcaIdComponent} from './cotxes/marca/listMarca/listMarcaId/listMarcaId.component';
import {ListMarcaNameComponent} from './cotxes/marca/listMarca/listMarcaName/listMarcaName.component';
import { ListMarcaAllComponent } from './cotxes/marca/listMarca/listMarcaAll/listMarcaAll.component';


import { InformacioComponent } from './cotxes/informacio/informacio.component';
import { NoticiesComponent } from './cotxes/informacio/noticies/noticies.component';
import { ContacteComponent } from './cotxes/informacio/informacio-empresa/contacte/contacte.component';
import { UbicacioComponent } from './cotxes/informacio/informacio-empresa/ubicacio/ubicacio.component';
import { InformacioEmpresaComponent } from './cotxes/informacio/informacio-empresa/informacio-empresa.component';

import { addModelComponent } from './cotxes/model/add-model/addModel.component';
import { deleteModelComponent } from './cotxes/model/delete-model/deleteModel.component';
import { listModelComponent } from './cotxes/model/list-model/listModel.component';
import { updateModelComponent } from './cotxes/model/update-model/updateModel.component';

const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
    children: []
  }, {
    path: 'marca',
    component: MarcaComponent
  }, {
    path: 'model',
    component: ModelComponent
  }, {
    path: 'equipament',
    component: EquipamentComponent
  },
    {
    path: 'addMarca',
    component: AddMarcaComponent
  },
    {
    path: 'updateMarca',
    component: UpdateMarcaComponent
  },
    {
    path: 'listMarca',
    component: ListMarcaComponent,

  },
    {
    path: 'listMarcaId',
    component: ListMarcaIdComponent,

  },
    {
    path: 'listMarcaAll',
    component: ListMarcaAllComponent,

  },
    {
    path: 'listMarcaName',
    component: ListMarcaNameComponent,

  }, {
    path: 'update',
    component: UpdateComponent
  }, {
      path: 'delete',
      component: DeleteComponent
  }, {
      path: 'regist',
      component: RegistComponent
  },
    
  {
    path: 'addModel',
    component: addModelComponent
  },
  {
    path: 'deleteModel',
    component: deleteModelComponent
  },
  {
    path: 'listModel',
    component: listModelComponent
  },
  {
    path: 'updateModel',
    component: updateModelComponent
  }, {
      path: 'informacio',
      component: InformacioComponent
  }, {
      path: 'informacio-empresa',
      component: InformacioEmpresaComponent
  }
    , {
      path: 'contacte',
      component: ContacteComponent
  }
    , {
        path: 'ubicacio',
        component: UbicacioComponent
    }, {
        path: 'noticies',
        component: NoticiesComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
