import { Component } from '@angular/core';

@Component({
  selector: 'app-cad',
  templateUrl: './cad.component.html',
  styleUrls: ['./cad.component.css']
})
export class CadComponent {

  //===================================================================
  // gestor de msgs de la navBar
  //=================================================================== 
  navBarMsgDrv(seleccion: {}) {
    if (seleccion['accion']) {
      if (seleccion['accion'] == 'geolocaLeaflet') {
        console.log('geolocalizar con Leaflet');
        //this.geolocaLeaflet();
        alert("geoloca leaflet");
        return
      }
      if (seleccion['accion'] == 'geolocaHtml') {
        console.log('geolocalizar con html');
        //this.geolocaHtml();
        alert("geoloca con Html");
        return
      }
    }
    if (seleccion === 'activarRuteo') {
      console.log('Activar ruteo');
      //this.cardPuntosRuteo = true
      alert("activar ruteo");
    }
  }
}
