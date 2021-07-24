import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GetDatosWebService } from './servicios/get-datos-web.service'
import { CapaIgnPartidosService } from './servicios/capa-ign-partidos.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GetDatosWebService,
    CapaIgnPartidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
