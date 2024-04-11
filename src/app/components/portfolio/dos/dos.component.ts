import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-dos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet],
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent {

}
