import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        RouterLink,
        RouterOutlet
    ],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export default class PortfolioComponent {

}
