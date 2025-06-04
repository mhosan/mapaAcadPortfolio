import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet
    ]
})
export class HomeComponent {

}
