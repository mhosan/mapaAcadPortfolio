import { Injectable } from '@angular/core';

declare let L;
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class CapaSeccionesService {
  capaSecciones : any;

  constructor() { }

  getCircuitosDepurado(elJson:any, filtro:string): any {
    this.capaSecciones = L.geoJson(elJson, {
      filter: elFiltradorDeCircuitos,
      style: (feature) => {
        return { color: 'rgb(255, 32, 0)', "weight": 0.5, "opacity": 0.60, "fillColor": "#000000", "fillOpacity": 0.1 };
      },
      onEachFeature: (feature, layer) => {
        let colorBordeOriginal: string = '';
        let espesorBordeOriginal: number = 0;
        let colorRellenoOriginal: string = '';
        var popupContent = `
        <table class="table table-striped table-borderless table-sm" style="font-family: 'Arial Narrow'">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="text-center">Partido</th>
              <th scope="col" class="text-center">Municipio</th>
              <th scope="col" class="text-center">Circuito</th>
              <th scope="col" class="text-center">Indec_d(?)</th>
              <th scope="col" class="text-center">gid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">${feature.properties.departamen}</td>  
              <td class="text-center">${feature.properties.cabecera}</td>
              <td class="text-center">${feature.properties.circuito}</td>
              <td class="text-center">${feature.properties.indec_d}</td>
              <td class="text-center">${feature.properties.gid}</td>
            </tr>
          </tbody>
        </table>
      `;
        layer.bindPopup(popupContent);

        layer.on({
          mouseover: (e: any) => {
            colorBordeOriginal = e.target.options.color;
            espesorBordeOriginal = e.target.options.weight;
            colorRellenoOriginal = e.target.options.fillColor
            layer.setStyle({
              "color": "rgba(0,255,0,0.5)",
              "weight": 4,
              "fillColor": "#cc9900"
            });
            let laCapa = e.target;
            let miTooltip = L.tooltip({
              position: 'bottom',
              noWrap: true,
              offset: [0, -30],
              sticky: true,
              opacity: 0.8
            })
              .setContent('<b>Pdo:</b>' + feature.properties.departamen)
              .setLatLng(e.latlng);
            laCapa.bindTooltip(miTooltip);
          },
          mouseout: (e: any) => {
            layer.setStyle({
              "color": colorBordeOriginal,
              "weight": espesorBordeOriginal,
              "fillColor": colorRellenoOriginal
            });
          }
        });
      },
      //pane: 'circuitos'
    });
    function elFiltradorDeCircuitos(feature) {
      if(filtro != ''){
        if (feature.properties.departamen === filtro) {
          return true;
        }
      } else {
        return true;
      } 
    }
    return this.capaSecciones;
  }

}
