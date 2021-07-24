import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Subject } from "rxjs/Subject";

@Injectable({
  providedIn: 'root'
})
export class GetDatosWebService {
  elJsonDelIGN: any;
  elJsonDeArba: any;
  constructor(private http: HttpClient) { }

  getWfsIgn(): Observable<any> {
    let laUrlCompleta = 'https://wms.ign.gob.ar/geoserver/ows?service=wfs&version=1.1.0&request=GetFeature&typeName=ign:departamento&outputFormat=application/json';
    let laUrlFiltrada = 'https://wms.ign.gob.ar/geoserver/ows?service=wfs&version=1.1.0&request=GetFeature&typeName=ign:departamento&outputFormat=application/json&CQL_FILTER=geometryType=%27MultiPolygon%27&PROPERTYNAME=gna&CQL_FILTER=gna=%27Partido%27';
    this.elJsonDelIGN = this.http.get<any>(laUrlCompleta);
    return this.elJsonDelIGN;
  }
  getWfsArba(): Observable<any> {
    let laUrlArba = 'http://geo.arba.gov.ar/geoserver/idera/wfs?service=wfs&version=1.1.0&request=GetFeature&typeName=idera:Departamento&outputFormat=application/json&srsName=EPSG:4326'
    //let laUrlSecGobAmbSust = 'http://geo2.ambiente.gob.ar/geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeName=ordenamiento:apn_sifal2016&outputFormat=application/json'
    this.elJsonDeArba = this.http.get<any>(laUrlArba);
    return this.elJsonDeArba;
  }

}
