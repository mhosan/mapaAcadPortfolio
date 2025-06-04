import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';

@Component({
    selector: 'app-uno',
    templateUrl: './uno.component.html',
    styleUrls: ['./uno.component.css'],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        RouterModule
    ]
})
export default class UnoComponent {

}
