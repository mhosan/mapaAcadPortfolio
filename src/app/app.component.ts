import { Component, OnInit } from '@angular/core';
import { GetDatosWebService } from './servicios/get-datos-web.service';
import { CapaIgnPartidosService } from './servicios/capa-ign-partidos.service'
import { CapaArbaPartidosService } from './servicios/capa-arba-partidos.service'
import { CapaCircuitosService } from './servicios/capa-circuitos.service';
import { CapaSeccionesService } from './servicios/capa-secciones.service';

declare let L;
let miMapa: any;
let controlLayers;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mapa';
  public layerWFSIgn: any;
  public layerWFSArba: any;
  public layerCircuitos: any;
  public layerSecciones: any;
  constructor(private servicioDatosWeb: GetDatosWebService,
    private servicioIGN: CapaIgnPartidosService,
    private servicioArba: CapaArbaPartidosService,
    private servicioCircuitos: CapaCircuitosService,
    private servicioSecciones: CapaSeccionesService) { }

  ngOnInit() {
    this.iniciarMapa();
  }

  //===================================================================
  // Iniciar el mapa
  //===================================================================
  iniciarMapa() {
    //-----------------------------------------------------------------
    const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    });
    //-----------------------------------------------------------------

    //-----------------------------------------------------------------
    const osm2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20 });
    //-----------------------------------------------------------------
    
    //-----------------------------------------------------------------
    // const osm1 = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    //   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    //     '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    //     'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //   id: 'mapbox.streets'
    // });
    //-----------------------------------------------------------------
    const osm1 = L.tileLayer.wms("https://wms.ign.gob.ar/geoserver/gwc/service/wmts?", {
	   layers: "capabaseargenmap",
	   //format: 'image/jpeg',
	   //transparent: true
	   //version: '1.3.0',//wms version (ver get capabilities)
	   //attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
	  });
    
    //-----------------------------------------------------------------
    const openmap = L.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
      attribution: 'terms and feedback'
    });
    //-----------------------------------------------------------------

    //-----------------------------------------------------------------
    const googleMaps = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    });
    //-----------------------------------------------------------------

    //-----------------------------------------------------------------
    //let urlBing2 ="http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=0&amp;dir=dir_n&username=''";         
    //let urlBing ="http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1";
    //const bing = L.tileLayer(urlBing2);

    //-----------------------------------------------------------------
    const esriSat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      { maxZoom: 22 });
    //-----------------------------------------------------------------

    //-----------------------------------------------------------------
    const esriTransportes = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}');
    //-----------------------------------------------------------------

    //-----------------------------------------------------------------
    const wmsLayer = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
      layers: 'OSM-WMS'
    });
    //-----------------------------------------------------------------
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
    L.control.scale().addTo(miMapa);
    L.control.zoom({
      position: 'bottomright'
    }).addTo(miMapa);
    const baseMaps = {
      /*"Google Hibrido": googleHibrido,
      "Google Callejero": googleCallejero,
      "Google Fisico": googleTerrain,
      "Google Satelital": googleSatelite, */
      "Open Street Map": osm2,
      //"Mapbox": osm1,
      "Mundialis": wmsLayer,
      "Google callejero ": googleMaps,
      "Google hibrido": googleHybrid,
      //"Bing": bing,
      "ArcGis OnLine": openmap,
      "Esri sat": esriSat,
      "Esri transportes": esriTransportes
    };
    let overlayMaps = {
      //"Capa Cursos": capaCursos
      //"Industrias cuenca Riachuelo": layerJson,
      //"Centros y Organizaciones Sociales": layerJsonCtos,
      //"Centros educativos Pcia.Bs.As.":  layerEducacionJson,
      //"Escuelas": layerEscuelasJson,
      //"FFCC (Ign, cortesia @FerroviarioK)": layerFFCC
      //"FFCC versi�n @FerroviarioK": layerFFCCFerroviariok,
      //"FFCC marcadores": layerFFCCFerroviariokMarcadores
      //"Centros educativos Pcia. Bs.As.": layerJsonEdu
    };
    controlLayers = L.control.layers(baseMaps, overlayMaps, { position: 'topright' }).addTo(miMapa);
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
  
  //===================================================================
  // traer todos los circuitos electorales
  //===================================================================
  capaCircuitos() {
   //if (miMapa.hasLayer(this.elCircuitoFiltrado)) {
   //   miMapa.removeLayer(this.elCircuitoFiltrado);
   // }
    if (miMapa.hasLayer(this.layerCircuitos)) {
      miMapa.removeLayer(this.layerCircuitos);
    }
    this.servicioDatosWeb.getCircuitosElectorales()
      .subscribe(respuestaJson => {
        this.layerCircuitos = this.servicioCircuitos.getCircuitosDepurado(respuestaJson, '');
        miMapa.addLayer(this.layerCircuitos);
        miMapa.fitBounds(this.layerCircuitos.getBounds());
      });
  }
  //===================================================================
  // traer todos las secciones  electorales
  //===================================================================
  capaSecciones() {
    //if (miMapa.hasLayer(this.elCircuitoFiltrado)) {
    //   miMapa.removeLayer(this.elCircuitoFiltrado);
    // }
     if (miMapa.hasLayer(this.layerSecciones)) {
       miMapa.removeLayer(this.layerSecciones);
     }
     this.servicioDatosWeb.getSeccionesElectorales()
       .subscribe(respuestaJson => {
         this.layerSecciones = this.servicioSecciones.getCircuitosDepurado(respuestaJson, '');
         miMapa.addLayer(this.layerSecciones);
         miMapa.fitBounds(this.layerSecciones.getBounds());
       });
   }

}
