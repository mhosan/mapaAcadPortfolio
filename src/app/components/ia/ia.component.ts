import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-ia',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './ia.component.html',
  styleUrl: './ia.component.css'
})
export class IaComponent {

}
