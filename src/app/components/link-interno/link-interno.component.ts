import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-link-interno',
  standalone: true,
  imports: [CommonModule, RouterLink,
    RouterOutlet],
  templateUrl: './link-interno.component.html',
  styleUrls: ['./link-interno.component.css']
})
export class LinkInternoComponent {

}
