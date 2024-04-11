import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-tres',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css']
})
export class TresComponent {

}
