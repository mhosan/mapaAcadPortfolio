import { Component, OnInit } from '@angular/core';

declare let L: any;
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapa';
  ngOnInit() {
    this.iniciarMapa();
  }

  iniciarMapa() {
    const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    });
    const osm2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20 });
    var miMapa = L.map('mapid', {
      center: [-34.921136, -57.954712],
      zoom: 8,
      zoomControl: false,
      maxZoom: 20
    }).addLayer(googleHybrid);

  }
}
