import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistComponent } from './regist/regist.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

//import MyErrorHandler from './client.service';

const routes: Routes = [
    {
        path: 'regist',
        component: RegistComponent,
        children: []
    }, {
        path: 'update',
        component: UpdateComponent
    }, {
        path: 'delete',
        component: DeleteComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
   // providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }]
})
export class ClientRoutingModule { }