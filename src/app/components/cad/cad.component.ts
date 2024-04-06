import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-cad',
  templateUrl: './cad.component.html',
  styleUrls: ['./cad.component.css'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class CadComponent {
  public showControlesGeograficos: boolean = false;
  public showAreaPoligonos: boolean = false;
  public showHelpInstall: boolean = false;
  
  verControlesGeograficos(){
    this.showControlesGeograficos = !this.showControlesGeograficos;
  }

  switchShowCardHelpAreaPoligonos(){
    this.showAreaPoligonos = !this.showAreaPoligonos;
  }

  showCardHelpInstall(){
    this.showHelpInstall = !this.showHelpInstall;
  }
}
