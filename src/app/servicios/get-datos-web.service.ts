import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Subject } from "rxjs/Subject";

@Injectable({
  providedIn: 'root'
})
export class GetDatosWebService {
  elJsonDelIGN: any;
  elJsonConaeRiesgo: any;
  elJsonDeArba: any;
  constructor(private http: HttpClient) { }

  getSeccionesElectorales(): Observable<any> {
    let lasSecciones = this.http.get<any>("./assets/seccElec.geojson");
    return lasSecciones;
  }
  
  getCircuitosElectorales(): Observable<any> {
    let losCircuitos = this.http.get<any>("./assets/circuitosElectoralesBuenosAires.geojson");
    return losCircuitos;
  }

  //===================================================================
  // cuando lee el wms del ign se pone muy lento
  //===================================================================
  getWfsIgn(): Observable<any> {
    let laUrlCompleta = 'https://wms.ign.gob.ar/geoserver/ows?service=wfs&version=1.1.0&request=GetFeature&typeName=ign:departamento&outputFormat=application/json';
    //let laUrlFiltrada = 'https://wms.ign.gob.ar/geoserver/ows?service=wfs&version=1.1.0&request=GetFeature&typeName=ign:departamento&outputFormat=application/json&CQL_FILTER=geometryType=%27MultiPolygon%27&PROPERTYNAME=gna&CQL_FILTER=gna=%27Partido%27';
    //this.elJsonDelIGN = this.http.get<any>(laUrlCompleta);
    //this.elJsonDelIGN = this.http.get<any>('./assets/partidos.geojson');
    this.elJsonDelIGN = this.http.get<any>(laUrlCompleta);
    return this.elJsonDelIGN;
  }

  //===================================================================
  // educacion gob ar, universidades
  //===================================================================
  getWfsConaeRiesgoEpi(): Observable<any> {
    let laUrlCompleta = 'https://mapa.educacion.gob.ar/geoserver/publico/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publico%3Ainstitucion_universitaria&maxFeatures=1450&outputFormat=application%2Fjson';
    let otraUrl ='https://mapa.educacion.gob.ar/geoserver/publico/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publico%3Aestablecimiento_educativo&maxFeatures=64490&outputFormat=application%2Fjson';
    this.elJsonConaeRiesgo = this.http.get<any>(laUrlCompleta);
    return this.elJsonConaeRiesgo;
  }

  
  getWfsArba(): Observable<any> {
    //dominio del server: https://geo.arba.gov.ar
    //let laUrlArbaProxy = '/geoserver/idera/wfs?service=wfs&version=1.1.0&request=GetFeature&typeName=idera:Departamento&outputFormat=application/json&srsName=EPSG:4326'
    //let laUrlArba = 'https://geo.arba.gov.ar/geoserver/idera/wfs?service=wfs&version=1.1.0&request=GetFeature&typeName=idera:Departamento&outputFormat=application/json&srsName=EPSG:4326'
    //let laUrlSecGobAmbSust = 'http://geo2.ambiente.gob.ar/geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeName=ordenamiento:apn_sifal2016&outputFormat=application/json'
    //this.elJsonDeArba = this.http.get<any>(laUrlSecGobAmbSust);
    this.elJsonDeArba = this.http.get<any>("./assets/partidos.txt");
    return this.elJsonDeArba;
  }
}
