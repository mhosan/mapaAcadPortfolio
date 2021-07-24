import { Component, OnInit } from '@angular/core';
import { GetDatosWebService } from './servicios/get-datos-web.service';
import { CapaIgnPartidosService } from './servicios/capa-ign-partidos.service'
import { CapaArbaPartidosService } from './servicios/capa-arba-partidos.service'

declare let L;
let miMapa: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mapa';
  public layerWFSIgn: any;
  public layerWFSArba: any;
  constructor(private servicioDatosWeb: GetDatosWebService,
    private servicioIGN: CapaIgnPartidosService,
    private servicioArba: CapaArbaPartidosService) { }

  ngOnInit() {
    this.iniciarMapa();
  }

  //===================================================================
  // Iniciar el mapa
  //===================================================================
  iniciarMapa() {
    const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    });
    const osm2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20 });

    miMapa = L.map('mapid', {
      contextmenu: true,
      contextmenuWidth: 180,
      contextmenuItems: [
        {
          text: 'Ver las coordenadas',
          callback: this.verCoordenadas,
          icon: 'assets/images/coordenadas.png'
        }, {
          text: 'Centrar aqui',
          callback: this.centrarMapa,
          icon: 'assets/images/banderita.png'
        }, '-',
        {
          text: 'Acercar',
          callback: this.acercar,
          icon: 'assets/images/zoom-in.png'
        }, {
          text: 'Alejar',
          callback: this.alejar,
          icon: 'assets/images/zoom-out.png'
        }],
      center: [-34.921136, -57.954712],
      zoom: 8,
      zoomControl: false,
      maxZoom: 20
    }).addLayer(osm2);
    
  }
  //===================================================================
  // 
  //===================================================================
  verCoordenadas(e) {
    const popupCoordenadas = L.popup();
    popupCoordenadas
      .setLatLng(e.latlng)
      .setContent('Coordenadas: ' + e.latlng)
      .openOn(miMapa);
  }

  //===================================================================
  //
  //===================================================================
  centrarMapa(e) {
    miMapa.panTo(e.latlng);
  }

  //===================================================================
  //
  //===================================================================
  acercar(e) {
    miMapa.zoomIn();
  }

  //===================================================================
  alejar(e) {
    //=================================================================
    miMapa.zoomOut();
  }

  //===================================================================
  // el wfs del ign, ojo es muy lento!
  //===================================================================
  capaWFSIgn() {

    if (miMapa.hasLayer(this.layerWFSIgn)) {
      miMapa.removeLayer(this.layerWFSIgn);
    }
    this.servicioDatosWeb.getWfsIgn()
      .subscribe(respuestaJson => {
        //console.log('El ign respondió: ', respuestaJson);
        this.layerWFSIgn = this.servicioIGN.getWfs(respuestaJson, 'Partido');
        miMapa.addLayer(this.layerWFSIgn);
        miMapa.fitBounds(this.layerWFSIgn.getBounds());
      });
  }
  //===================================================================
  // el wfs de Arba
  //===================================================================
  capaWFSArba() {

    if (miMapa.hasLayer(this.layerWFSArba)) {
      miMapa.removeLayer(this.layerWFSArba);
    }
    this.servicioDatosWeb.getWfsArba()
      .subscribe(respuestaJson => {
        this.layerWFSArba = this.servicioArba.getWfs(respuestaJson, '');
        miMapa.addLayer(this.layerWFSArba);
        miMapa.fitBounds(this.layerWFSArba.getBounds());
      });
  }

}
