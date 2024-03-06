import { Component } from '@angular/core';

@Component({
  selector: 'app-cad',
  templateUrl: './cad.component.html',
  styleUrls: ['./cad.component.css']
})
export class CadComponent {
  public showControlesGeograficos: boolean = false;
  public showAreaPoligonos: boolean = false;
  
  verControlesGeograficos(){
    this.showControlesGeograficos = !this.showControlesGeograficos;
  }

  switchShowCardHelpAreaPoligonos(){
    this.showAreaPoligonos = !this.showAreaPoligonos;
  }
}
