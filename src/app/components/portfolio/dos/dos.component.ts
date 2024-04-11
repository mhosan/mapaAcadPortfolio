import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-dos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export default class DosComponent {

}
