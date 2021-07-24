import { Injectable } from '@angular/core';

declare let L: any;
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class CapaArbaPartidosService {
  capaArba: any;

  constructor() { }

  getWfs(elJson: any, filtro: string): any {
    this.capaArba = L.geoJson(elJson, {
      filter: elFiltradorDeIGN,
      style: (feature: any) => {
        return { color: 'rgba(200, 40, 0, 0.5)', "weight": 2.5, "opacity": 0.40 };
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
              <th scope="col" class="text-center">Código</th>
              <th scope="col" class="text-center">Origen del dato</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">${feature.properties.fna}</td>  
              <td class="text-center">${feature.properties.in1}</td>
              <td class="text-center">${feature.properties.sag}</td>
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
              .setContent('<b>Pdo:</b>' + feature.properties.fna)
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
      }
      //,
      //pane: 'partidos'
    });
    function elFiltradorDeIGN(feature) {
      if (filtro != '') {
        if (feature.properties.gna === filtro) {
          return true;
        }
      } else {
        return true;
      }
    }
    return this.capaArba;
  }

}
