import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolaModule } from './escola/escola.module';
import { ProfessorComponent } from './professor/professor.component';
import { EsportComponent } from './professor/esport/esport.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    EsportComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EscolaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
