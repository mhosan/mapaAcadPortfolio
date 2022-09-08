import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() msgNavbar:EventEmitter<string>;
  constructor() {
    this.msgNavbar = new EventEmitter
   }

  ngOnInit(): void {
  }

  capaWFSArba(){
    this.msgNavbar.emit('partidos');
  }

  capaSecciones(){
    this.msgNavbar.emit('secciones')
  }

  capaCircuitos(){
    this.msgNavbar.emit('circuitos');
  }

  geoloca(){
    this.msgNavbar.emit('geoloca');
  }

}
