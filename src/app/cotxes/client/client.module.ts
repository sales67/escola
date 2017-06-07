import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';

import { CotxesModule } from '../cotxes.module';

@NgModule({
    declarations: [
        ClientComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ClientRoutingModule,
        CotxesModule
    ],
    providers: [],
    bootstrap: [ClientComponent]
})
export class ClientModule { }
