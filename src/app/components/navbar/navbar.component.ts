import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Layer } from '../../models/layer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() msgNavbar:EventEmitter<any>;
  
  public capasBase: Layer[] = [];
  public capasOverlay: Layer[] = [];

  constructor() {
    this.msgNavbar = new EventEmitter
   }

  ngOnInit(): void {
    this.capasOverlay[0] = {
      id: 0,
      nombreFantasia: "Capa partidos de Arba (WFS)",
      capaBase: false,
      nombre: 'partidos',
      encendido: false
    };
    this.capasOverlay[1] = {
      id: 1,
      nombreFantasia: "Capa secc. elect. (GeoJson)",
      capaBase: false,
      nombre: 'secciones',
      encendido: false
    };
    this.capasOverlay[2] = {
      id: 2,
      nombreFantasia: "Capa circuitos elect. (GeoJson)",
      capaBase: false,
      nombre: 'circuitos',
      encendido: false
    };
    //----------------------------------------------------------------
    this.capasBase[0] = {
      id: 0,
      nombreFantasia: "Open Street Map",
      capaBase: true,
      nombre: 'osm2',
      encendido: false
    };
    this.capasBase[1] = {
      id: 1,
      nombreFantasia: "Google callejero",
      capaBase: true,
      nombre: 'googleMaps',
      encendido: false
    };
    this.capasBase[2] = {
      id: 2,
      nombreFantasia: "Google hibrido",
      capaBase: true,
      nombre: 'googleHybrid',
      encendido: false
    };
    this.capasBase[3] = {
      id: 3,
      nombreFantasia: "ArcGis OnLine",
      capaBase: true,
      nombre: 'openmap',
      encendido: false
    };
    this.capasBase[4] = {
      id: 4,
      nombreFantasia: "Esri sat",
      capaBase: true,
      nombre: 'esriSat',
      encendido: false
    };
    this.capasBase[5] = {
      id: 5,
      nombreFantasia: "Esri transportes",
      capaBase: true,
      nombre: 'esriTransportes',
      encendido: false
    };
    this.capasBase[6] = {
      id: 6,
      nombreFantasia: "Terrestris topo (https://www.terrestris.de/en/)",
      capaBase: true,
      nombre: 'wmsTerrestrisTopo',
      encendido: false
    };
    this.capasBase[7] = {
      id: 7,
      nombreFantasia: "Terrestris Osm (https://www.terrestris.de/en/)",
      capaBase: true,
      nombre: 'wmsTerrestrisOsm',
      encendido: true
    };

  }

  geoloca(){
    this.msgNavbar.emit({accion: 'geoloca'});
  }

  capaSeleccionadaBase(
    idCapaSeleccionada: number, 
    tipoCapaSeleccionada: boolean, 
    nombreCapaSeleccionada: string, 
    nombreFantasiaCapaSeleccionada: string,
    encendidoCapaSeleccionada: boolean) {
    if (encendidoCapaSeleccionada) {
      alert("La capa ya está encendida...");
      return;
    } else { 
      let capaEnviar = { 
        nombre: nombreCapaSeleccionada, 
        capaBase: tipoCapaSeleccionada,
        nombreFantasia: nombreFantasiaCapaSeleccionada, 
        encendido: encendidoCapaSeleccionada };
      this.capasBase.forEach(element => {
        element.encendido = false;
      });
      this.capasBase[idCapaSeleccionada]['encendido'] = !encendidoCapaSeleccionada;
      this.msgNavbar.emit(capaEnviar);
    }
  }

  capaSeleccionadaOverlay(
    idCapaSeleccionada: number, 
    tipoCapaSeleccionada: boolean, 
    nombreCapaSeleccionada: string,
    encendidoCapaSeleccionada: boolean) {
    let capaEnviar = {
      id: idCapaSeleccionada,
      nombre: nombreCapaSeleccionada,
      capaBase: tipoCapaSeleccionada, 
      encendido: encendidoCapaSeleccionada}
    this.capasOverlay[idCapaSeleccionada]['encendido'] = !encendidoCapaSeleccionada;
    this.msgNavbar.emit(capaEnviar); 
  }

}
