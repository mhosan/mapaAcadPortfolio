import { Component } from '@angular/core';

import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';

@Component({
    selector: 'app-portfolio',
    imports: [
    RouterModule,
    RouterLink,
    RouterOutlet
],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export default class PortfolioComponent {

}
