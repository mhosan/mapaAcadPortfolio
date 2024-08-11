import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule} from '@angular/router';

@Component({
  selector: 'app-cuatro',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './cuatro.component.html',
  styleUrls: ['./cuatro.component.css']
})
export default class CuatroComponent {

}
