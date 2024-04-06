import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { GetDatosWebService } from './servicios/get-datos-web.service'
import { CapaIgnPartidosService } from './servicios/capa-ign-partidos.service'
import { CapaArbaPartidosService } from './servicios/capa-arba-partidos.service';
import { MapaComponent } from './components/mapa/mapa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CadComponent } from './components/cad/cad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarComponent,
    MapaComponent,
    CadComponent
  ],
  providers: [
    GetDatosWebService,
    CapaIgnPartidosService,
    CapaArbaPartidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
