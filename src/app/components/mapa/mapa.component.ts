import { Component, OnInit } from '@angular/core';
import { GetDatosWebService } from '../../servicios/get-datos-web.service';
import { CapaIgnPartidosService } from '../../servicios/capa-ign-partidos.service'
import { CapaArbaPartidosService } from '../../servicios/capa-arba-partidos.service'
import { CapaCircuitosService } from '../../servicios/capa-circuitos.service';
import { CapaSeccionesService } from '../../servicios/capa-secciones.service';
//import * as L from 'leaflet';
import 'leaflet-routing-machine';

declare let L;

let miMapa: any;
let controlLayers;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  title = 'mhMapa';
  public layerWFSIgn: any;
  public layerWFSArba: any;
  public layerCircuitos: any;
  public layerSecciones: any;
  public osm2: any;
  public argenMap: any;
  public googleMaps: any;
  public googleHybrid: any;
  public openmap: any;
  public esriSat: any;
  public esriTransportes: any;
  public wmsTerrestrisTopo: any;
  public wmsTerrestrisOsm: any;
  public urlImagen: any;
  public imagenNasaVisible: boolean = false;
  public capaBaseActiva: any;
  public marcadorRuteoPuntoA: any;
  public marcadorRuteoPuntoB: any;
  public marcadoresLayerA: any;
  public marcadoresLayerB: any;
  public vengoDe: string = " ";
  public cardPuntosRuteo: boolean;
  public controlRuteo: any;

  constructor(private servicioDatosWeb: GetDatosWebService,
    private servicioIGN: CapaIgnPartidosService,
    private servicioArba: CapaArbaPartidosService,
    private servicioCircuitos: CapaCircuitosService,
    private servicioSecciones: CapaSeccionesService) { }

  ngOnInit(): void {
    L.Icon.Default.imagePath = "assets/leaflet/"
    this.iniciarMapa();
    this.agregarLayerGroupMarcadores();
  }

  //===================================================================
  // Agregar layer para los marcadores
  //===================================================================
  agregarLayerGroupMarcadores() {
    this.marcadoresLayerA = L.layerGroup().addTo(miMapa);
    this.marcadoresLayerB = L.layerGroup().addTo(miMapa);
  }

  //===================================================================
  // Iniciar el mapa
  //===================================================================
  iniciarMapa() {
    //-----------------------------------------------------------------
    this.googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    });
    //-----------------------------------------------------------------

    //-----------------------------------------------------------------
    this.osm2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20 });
    //-----------------------------------------------------------------

    //-----------------------------------------------------------------
    this.argenMap = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
      minZoom: 1, maxZoom: 20
    });

    //-----------------------------------------------------------------
    this.openmap = L.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
      attribution: 'terms and feedback'
    });
    //-----------------------------------------------------------------

    //-----------------------------------------------------------------
    this.googleMaps = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    });
    //-----------------------------------------------------------------

    //-----------------------------------------------------------------
    this.esriSat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      { maxZoom: 22 });
    //-----------------------------------------------------------------

    //-----------------------------------------------------------------
    this.esriTransportes = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}');
    //-----------------------------------------------------------------

    //-----------------------------------------------------------------
    //https://www.terrestris.de/en/
    this.wmsTerrestrisTopo = L.tileLayer.wms('https://ows.terrestris.de/osm/service?', { layers: 'TOPO-OSM-WMS' });
    this.wmsTerrestrisOsm = L.tileLayer.wms('http://ows.mundialis.de/services/service?', { layers: 'OSM-WMS' });
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
      center: [-36.214269, -61.073242],
      zoom: 6.5,
      zoomControl: false,
      maxZoom: 20
    }).addLayer(this.osm2);
    L.control.scale().addTo(miMapa);
    /* L.control.coordinates({
      position:"bottomleft", //optional default "bootomright"
      decimals:2, //optional default 4
      decimalSeperator:".", //optional default "."
      labelTemplateLat:"Latitude: {y}", //optional default "Lat: {y}"
      labelTemplateLng:"Longitude: {x}", //optional default "Lng: {x}"
      enableUserInput:true, //optional default true
      useDMS:false, //optional default false
      useLatLngOrder: true, //ordering of labels, default false-> lng-lat
      markerType: L.marker, //optional default L.marker
      markerProps: {}, //optional default {},
      labelFormatterLng : function(lng){return lng+" lng"}, //optional default none,
      labelFormatterLat : function(lat){return lat+" lat"}, //optional default none
      //customLabelFcn: function(latLonObj, opts) { "Geohash: " + encodeGeoHash(latLonObj.lat, latLonObj.lng)} //optional default none
 }).addTo(miMapa); */

    L.control.coordinates({
      labelTemplateLat: "Lat.: {y}",
      labelTemplateLng: "Lon.: {x},"
    }).addTo(miMapa);

    L.control.zoom({
      position: 'bottomright'
    }).addTo(miMapa);

    /* let marker = L.marker([-34.893832, -57.957300]).bindPopup('Ud. está aqui!');
      miMapa.addLayer(marker); */

    this.capaBaseActiva = this.osm2;

  }  //<--------------------------------------end iniciarMapa


  verCoordenadas(e) {
    const popupCoordenadas = L.popup();
    popupCoordenadas
      .setLatLng(e.latlng)
      .setContent('Coordenadas: ' + e.latlng)
      .openOn(miMapa);
  }

  centrarMapa(e) {
    miMapa.panTo(e.latlng);
  }

  acercar(e) {
    miMapa.zoomIn();
  }

  alejar(e) {
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
  // el wfs de Arba (desde un geoJson: ./assets/partidos.txt)
  //===================================================================
  capaWFSArba() {
    if (!this.layerWFSArba === undefined) {
      if (miMapa.hasLayer(this.layerWFSArba)) {
        miMapa.removeLayer(this.layerWFSArba);
      }
    }
    this.servicioDatosWeb.getWfsArba()
      .subscribe(respuestaJson => {
        this.layerWFSArba = this.servicioArba.getWfs(respuestaJson, '');
        miMapa.addLayer(this.layerWFSArba);
        //miMapa.fitBounds(this.layerWFSArba.getBounds());
      });
  }

  //===================================================================
  // circuitos electorales (desde un geoJson: ./assets/circuitosElectoralesBuenosAires.geojson)
  //===================================================================
  capaCircuitos() {
    if (!this.layerCircuitos === undefined) {
      if (miMapa.hasLayer(this.layerCircuitos)) {
        miMapa.removeLayer(this.layerCircuitos);
      }
    }
    this.servicioDatosWeb.getCircuitosElectorales()
      .subscribe(respuestaJson => {
        this.layerCircuitos = this.servicioCircuitos.getCircuitosDepurado(respuestaJson, '');
        miMapa.addLayer(this.layerCircuitos);
        //miMapa.fitBounds(this.layerCircuitos.getBounds());
      });
  }

  //===================================================================
  // secciones  electorales (desde un geoJson: ./assets/seccElec.geojson)
  //===================================================================
  capaSecciones() {
    if (!this.layerSecciones === undefined) {
      if (miMapa.hasLayer(this.layerSecciones)) {
        miMapa.removeLayer(this.layerSecciones);
      }
    }
    this.servicioDatosWeb.getSeccionesElectorales()
      .subscribe(respuestaJson => {
        this.layerSecciones = this.servicioSecciones.getCircuitosDepurado(respuestaJson, '');
        miMapa.addLayer(this.layerSecciones);
        //miMapa.fitBounds(this.layerSecciones.getBounds());
      });
  }

  //===================================================================
  // geolocalizar al usuario con Leaflet (en local no funca)
  //===================================================================
  geolocaLeaflet() {
    miMapa.locate({ setView: true, maxZoom: 16 })
      .on('locationfound', (e) => {
        let marker = L.marker([e.latitude, e.longitude]).bindPopup('Ud. está aqui!');
        miMapa.addLayer(marker);
        var radius = e.accuracy * 300;
        var location = e.latlng
        let circle = L.circle(location, radius);
        miMapa.addLayer(circle);
      })
      .on('locationerror', (e) => {
        console.log(e);
        alert('Location access denied');
      })
  }

  //===================================================================
  // geolocalizar al usuario con html
  //===================================================================
  geolocaHtml() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    function onSuccess(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      let marker = L.marker([latitude, longitude]).bindPopup('Ud. está aqui!');
      miMapa.addLayer(marker);
      var radius = 300;
      var location = [latitude, longitude]
      let circle = L.circle(location, radius);
      miMapa.addLayer(circle);
      const today = new Date();
      const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + ' ' + time;
      alert(`Ok, ubicación resuelta. ${dateTime}`);
    }
    function onError(error) {
      var txt;
      switch (error.code) {
        case error.PERMISSION_DENIED:
          txt = 'Location permission denied';
          break;
        case error.POSITION_UNAVAILABLE:
          txt = 'Location position unavailable';
          break;
        case error.TIMEOUT:
          txt = 'Location position lookup timed out';
          break;
        default:
          txt = 'Unknown position.'
      }
      alert(txt)
    }
  }

  //===================================================================
  // gestor de msgs de la navBar
  //=================================================================== 
  navBarMsgDrv(seleccion: {}) {
    if (seleccion['accion']) {
      if (seleccion['accion'] == 'geolocaLeaflet') {
        console.log('geolocalizar con Leaflet');
        this.geolocaLeaflet();
        return
      }
      if (seleccion['accion'] == 'geolocaHtml') {
        console.log('geolocalizar con html');
        this.geolocaHtml();
        return
      }
    }
    if (seleccion === 'activarRuteo') {
      console.log('Activar ruteo');
      this.cardPuntosRuteo = true
    }

    let laCapa: any;
    //console.log(`La capa seleccionada es: ${seleccion['nombre']}, capaBase: ${seleccion['capaBase']} y su estado actual de encendido es: ${seleccion['encendido']}`);
    if (!seleccion['capaBase']) {               //es una capa overlay
      switch (seleccion['encendido']) {
        case true:                              //hay que apagar la capa
          switch (seleccion['nombre']) {
            case 'partidos':
              if (miMapa.hasLayer(this.layerWFSArba)) {
                miMapa.removeLayer(this.layerWFSArba);
              }
              break;
            case 'secciones':
              if (miMapa.hasLayer(this.layerSecciones)) {
                miMapa.removeLayer(this.layerSecciones);
              }
              break;
            case 'circuitos':
              if (miMapa.hasLayer(this.layerCircuitos)) {
                miMapa.removeLayer(this.layerCircuitos);
              }
              break;
          }
          break;
        case false:                             //hay que encender la capa 
          switch (seleccion['nombre']) {
            case 'partidos':
              this.capaWFSArba();
              break;
            case 'secciones':
              this.capaSecciones();
              break;
            case 'circuitos':
              this.capaCircuitos();
              break;
          }
          break;
      }
    } else {                                    //es una capa base
      switch (seleccion['nombreFantasia']) {
        case 'ArgenMap IGN (xyz)':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.argenMap.addTo(miMapa);
          this.capaBaseActiva = this.argenMap;
          break;
        case 'Open Street Map':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.osm2.addTo(miMapa);
          this.capaBaseActiva = this.osm2;
          break;
        case 'Google callejero':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.googleMaps.addTo(miMapa);
          this.capaBaseActiva = this.googleMaps;
          break;
        case 'Google hibrido':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.googleHybrid.addTo(miMapa);
          this.capaBaseActiva = this.googleHybrid;
          break;
        case 'ArcGis OnLine':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.openmap.addTo(miMapa);
          this.capaBaseActiva = this.openmap;
          break;
        case 'Esri sat':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.esriSat.addTo(miMapa);
          this.capaBaseActiva = this.esriSat;
          break;
        case 'Esri transportes':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.esriTransportes.addTo(miMapa);
          this.capaBaseActiva = this.esriTransportes;
          break;
        case 'Terrestris topo':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.wmsTerrestrisTopo.addTo(miMapa);
          this.capaBaseActiva = this.wmsTerrestrisTopo;
          break;
        case 'Terrestris Osm':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.wmsTerrestrisOsm.addTo(miMapa);
          this.capaBaseActiva = this.wmsTerrestrisOsm;
          break;
      }
    }
  }

  //===================================================================
  // ruteo, seleccionar punto inicio
  //===================================================================
  ruteoPuntoA() {
    const iconoSalida = L.icon({
      iconUrl: 'assets/ruteo/ruteoSalida03.png',
      iconSize: [27, 30],
      iconAnchor: [12, 22],
      popupAnchor: [1, -20],
    });
    this.seleccionUbicacion(true, iconoSalida);
    this.vengoDe = "A";
  }

  //===================================================================
  // ruteo, seleccionar punto final
  //===================================================================
  ruteoPuntoB() {
    const iconoLlegada = L.icon({
      iconUrl: 'assets/ruteo/ruteoLlegada03.png',
      iconSize: [27, 30],
      iconAnchor: [12, 22],
      popupAnchor: [1, -20],
    });
    this.seleccionUbicacion(true, iconoLlegada);
    this.vengoDe = "B";
  }

  //===================================================================
  // comenzar el ruteo
  //===================================================================
  comenzarRuteo() {
    this.seleccionUbicacion(false, "-");
    console.log(this.marcadorRuteoPuntoA._latlng);
    console.log(this.marcadorRuteoPuntoB._latlng);
    this.cardPuntosRuteo = false;
    this.iniciarRuteo(this.marcadorRuteoPuntoA, this.marcadorRuteoPuntoB);
    this.marcadoresLayerA.clearLayers();
    this.marcadoresLayerB.clearLayers();
  }

  //===================================================================
  // ACTIVAR seleccion de una posición en el mapa (viene de seleccionar
  // punto A o B)
  //===================================================================
  seleccionUbicacion(activar: boolean, iconoAUtilizar: any) {
    if (activar) {
      miMapa.on('click', (e) => {
        let coordPunto = e.latlng;

        let marcadorPunto = L.marker(coordPunto, { icon: iconoAUtilizar, draggable: 'true' })
          .bindPopup(coordPunto.toString());
        localStorage.setItem(`punto${this.vengoDe}`, JSON.stringify({
          lat: coordPunto.lat,
          lng: coordPunto.lng
        }));

        marcadorPunto.on('dragend', (event) => {
          marcadorPunto = event.target;
          coordPunto = "";
          coordPunto = marcadorPunto.getLatLng();
          marcadorPunto.setLatLng(coordPunto, { icon: iconoAUtilizar, draggable: 'true' }).bindPopup(coordPunto.toString()).update();
          localStorage.setItem(`punto${this.vengoDe}`, JSON.stringify({
            lat: coordPunto.lat,
            lng: coordPunto.lng
          }));
        })

        if (this.vengoDe === "A") {
          this.marcadorRuteoPuntoA = marcadorPunto;
          miMapa.addLayer(this.marcadorRuteoPuntoA);
          this.marcadoresLayerA.clearLayers();
          this.marcadoresLayerA.addLayer(this.marcadorRuteoPuntoA);
        } else if (this.vengoDe === "B") {
          this.marcadorRuteoPuntoB = marcadorPunto;
          miMapa.addLayer(this.marcadorRuteoPuntoB);
          this.marcadoresLayerB.clearLayers();
          this.marcadoresLayerB.addLayer(this.marcadorRuteoPuntoB);
        }
      });
    } else {
      miMapa.off('click');
    }
  }

  //===================================================================
  // Iniciar ruteo
  //===================================================================
  iniciarRuteo(puntoA: any, puntoB: any) {
    this.controlRuteo = L.Routing.control({
      waypoints: [
        puntoA._latlng,
        puntoB._latlng
      ],
      router: L.Routing.osrmv1({
        serviceUrl: 'http://router.project-osrm.org/route/v1'
      }),
      language: 'es',
      collapsible: true,
      autoRoute: true,
      routeWhileDragging: true,
      reverseWaypoints: true,
      showAlternatives: true,
      altLineOptions: {
        styles: [
          { color: 'black', opacity: 0.15, weight: 9 },  //sombra
          { color: 'white', opacity: 0.8, weight: 6 },   //contorno
          { color: 'blue', opacity: 0.5, weight: 2 }     //centro
        ]
      },
      summaryTemplate: '<h2>Trayectoria: {name}</h2><h3>Distancia: {distance}, Tiempo: {time}</h3>',      
    }).addTo(miMapa);
    
    const tables = document.querySelectorAll('table');
    console.log(tables);

    L.Routing.errorControl(this.controlRuteo).addTo(miMapa);

    L.Routing.Formatter = L.Class.extend({
      options: {
      language: 'es'
      } 
    }); 

    let divRuteo = document.getElementsByClassName("leaflet-routing-container")[0] as HTMLElement;
    divRuteo.style.position = "absolute";
    divRuteo.style.left = "-150vh";
    divRuteo.style.top = "3vh";
    const botonCerrarRuteo = document.createElement("button");
    botonCerrarRuteo.textContent = "Cerrar ruteo";
    botonCerrarRuteo.className ="btn btn-primary btn-sm mt-1 mb-1 ms-1";
    botonCerrarRuteo.onclick = () => {
      console.log("Se hizo clic en el botón");
      this.controlRuteo.remove();
    };
    divRuteo.appendChild(botonCerrarRuteo);

    //divRuteo.addEventListener('DOMContentLoaded', () => {
      // Iniciar la traducción del contenido del div.
      //const elements = divRuteo.querySelectorAll('table');
      //console.log(elements);
    //});

  }
}
