import { Injectable } from '@angular/core';

declare let L: any;

@Injectable({
    providedIn: 'root'
})
export class RuteoService {
    public marcadorRuteoPuntoA: any;
    public marcadorRuteoPuntoB: any;
    public marcadoresLayerA: any;
    public marcadoresLayerB: any;
    public vengoDe: string = " ";
    public controlRuteo: any;
    private map: any;

    constructor() { }

    /**
     * Inicializa el servicio con la instancia del mapa.
     * @param map Instancia de Leaflet Map
     */
    setMap(map: any) {
        this.map = map;
        this.marcadoresLayerA = L.layerGroup().addTo(this.map);
        this.marcadoresLayerB = L.layerGroup().addTo(this.map);
    }

    /**
     * Configura la selección del punto de inicio (A).
     */
    ruteoPuntoA() {
        const iconoSalida = L.icon({
            iconUrl: 'assets/ruteo/ruteoSalida03.png',
            iconSize: [27, 30],
            iconAnchor: [12, 22],
            popupAnchor: [1, -20],
        });
        this.vengoDe = "A";
        this.seleccionUbicacion(true, iconoSalida);
    }

    /**
     * Configura la selección del punto de llegada (B).
     */
    ruteoPuntoB() {
        const iconoLlegada = L.icon({
            iconUrl: 'assets/ruteo/ruteoLlegada03.png',
            iconSize: [27, 30],
            iconAnchor: [12, 22],
            popupAnchor: [1, -20],
        });
        this.vengoDe = "B";
        this.seleccionUbicacion(true, iconoLlegada);
    }

    /**
     * Activa o desactiva la escucha de clics en el mapa para posicionar marcadores.
     */
    seleccionUbicacion(activar: boolean, iconoAUtilizar: any) {
        if (activar) {
            this.map.on('click', (e: any) => {
                let coordPunto = e.latlng;

                let marcadorPunto = L.marker(coordPunto, { icon: iconoAUtilizar, draggable: 'true' })
                    .bindPopup(coordPunto.toString());

                localStorage.setItem(`punto${this.vengoDe}`, JSON.stringify({
                    lat: coordPunto.lat,
                    lng: coordPunto.lng
                }));

                marcadorPunto.on('dragend', (event: any) => {
                    marcadorPunto = event.target;
                    coordPunto = marcadorPunto.getLatLng();
                    marcadorPunto.setLatLng(coordPunto, { icon: iconoAUtilizar, draggable: 'true' }).bindPopup(coordPunto.toString()).update();
                    localStorage.setItem(`punto${this.vengoDe}`, JSON.stringify({
                        lat: coordPunto.lat,
                        lng: coordPunto.lng
                    }));
                });

                if (this.vengoDe === "A") {
                    this.marcadorRuteoPuntoA = marcadorPunto;
                    this.map.addLayer(this.marcadorRuteoPuntoA);
                    this.marcadoresLayerA.clearLayers();
                    this.marcadoresLayerA.addLayer(this.marcadorRuteoPuntoA);
                } else if (this.vengoDe === "B") {
                    this.marcadorRuteoPuntoB = marcadorPunto;
                    this.map.addLayer(this.marcadorRuteoPuntoB);
                    this.marcadoresLayerB.clearLayers();
                    this.marcadoresLayerB.addLayer(this.marcadorRuteoPuntoB);
                }
            });
        } else {
            this.map.off('click');
        }
    }

    /**
     * Inicia el proceso de ruteo calculado entre los dos puntos seleccionados.
     */
    comenzarRuteo() {
        this.seleccionUbicacion(false, "-");
        this.iniciarRuteo(this.marcadorRuteoPuntoA, this.marcadorRuteoPuntoB);
        this.marcadoresLayerA.clearLayers();
        this.marcadoresLayerB.clearLayers();
    }

    /**
     * Configura y añade el control de ruteo al mapa.
     */
    private iniciarRuteo(puntoA: any, puntoB: any) {
        if (this.controlRuteo) {
            this.controlRuteo.remove();
        }

        this.controlRuteo = L.Routing.control({
            waypoints: [
                puntoA._latlng,
                puntoB._latlng
            ],
            router: L.Routing.osrmv1({
                serviceUrl: 'https://router.project-osrm.org/route/v1',
                language: 'es'
            }),
            language: 'es',
            collapsible: true,
            autoRoute: true,
            routeWhileDragging: true,
            reverseWaypoints: true,
            showAlternatives: true,
            altLineOptions: {
                styles: [
                    { color: 'black', opacity: 0.15, weight: 9 },
                    { color: 'white', opacity: 0.8, weight: 6 },
                    { color: 'blue', opacity: 0.5, weight: 2 }
                ]
            },
            summaryTemplate: '<h2>Trayectoria: {name}</h2><h3>Distancia: {distance}, Tiempo: {time}</h3>',
        }).addTo(this.map);

        L.Routing.errorControl(this.controlRuteo).addTo(this.map);

        // Ajustes visuales y botón de cerrar
        let divRuteo = document.getElementsByClassName("leaflet-routing-container")[0] as HTMLElement;
        if (divRuteo) {
            divRuteo.style.position = "absolute";
            divRuteo.style.left = "-150vh";
            divRuteo.style.top = "3vh";

            const botonCerrarRuteo = document.createElement("button");
            botonCerrarRuteo.textContent = "Cerrar ruteo";
            botonCerrarRuteo.className = "btn btn-primary btn-sm mt-1 mb-1 ms-1";
            botonCerrarRuteo.onclick = () => {
                this.controlRuteo.remove();
            };
            divRuteo.appendChild(botonCerrarRuteo);
        }
    }
}
