import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GetDatosWebService } from './servicios/get-datos-web.service'
import { CapaIgnPartidosService } from './servicios/capa-ign-partidos.service'
import { CapaArbaPartidosService } from './servicios/capa-arba-partidos.service';
import { MapaComponent } from './components/mapa/mapa.component';
import { NavbarComponent } from './components/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GetDatosWebService,
    CapaIgnPartidosService,
    CapaArbaPartidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
