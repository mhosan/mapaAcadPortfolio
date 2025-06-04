import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule} from '@angular/router';

@Component({
    selector: 'app-dos',
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        RouterModule
    ],
    templateUrl: './dos.component.html',
    styleUrls: ['./dos.component.css']
})
export default class DosComponent {

}
