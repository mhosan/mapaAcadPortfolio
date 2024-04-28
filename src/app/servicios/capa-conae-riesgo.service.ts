import { Injectable } from '@angular/core';

declare let L;
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class CapaConaeRiesgoService {
  capaConaeRiesgo: any;

  constructor() { }

  getConaeRiesgo(elJson: any) {
    //una capa de tipo punto
    let estiloPunto = {
      radius: 5,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.5
    };

    this.capaConaeRiesgo = L.geoJson(elJson, {
      pointToLayer: function (feature, latlng) {
        let miPopup = L.popup().setContent('hola mundo');
        let miMarcadorCircular = L.circleMarker(latlng, estiloPunto);
        miMarcadorCircular.bindPopup(miPopup); 
        //return L.circleMarker(latlng, estiloPunto);
        return miMarcadorCircular;
      },
      onEachFeature: function (feature, layer) {
        /* var popupContent = `
        <table class="table table-striped table-borderless table-sm" style="font-family: 'Arial Narrow'">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="text-center">Organismo</th>
              <th scope="col" class="text-center">Nombre</th>
              <th scope="col" class="text-center">Partido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">${feature.properties.organismo}</td>  
              <td class="text-center">${feature.properties.nombre}</td>
              <td class="text-center">${feature.properties.partido}</td>
            </tr>
          </tbody>
        </table>
      `; */
        // layer.bindPopup(popupContent);

        // layer.on({
        //   mouseover: (e:any) =>{
        //     //colorBordeOriginal = e.target.options.color;
        //     //espesorBordeOriginal = e.target.options.weight;
        //     //colorRellenoOriginal = e.target.options.fillColor
        //     layer.setStyle({
        //       "color": "rgba(0,255,0,0.5)",
        //       "weight": 4,
        //       "fillColor": "#cc9900"
        //     });
        //     let laCapa = e.target;
        //     let miTooltip = L.tooltip({
        //       position: 'bottom',
        //       noWrap: true,
        //       offset: [0, -30],
        //       sticky: true,
        //       opacity: 0.8
        //     })
        //       .setContent('<b>Cartel:</b>')
        //       .setLatLng(e.latlng);
        //     laCapa.bindTooltip(miTooltip);
        //   }
        // });
      }
    });
    return this.capaConaeRiesgo;
  }

}
