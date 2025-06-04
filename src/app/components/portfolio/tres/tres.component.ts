import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule} from '@angular/router';

@Component({
    selector: 'app-tres',
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        RouterModule
    ],
    templateUrl: './tres.component.html',
    styleUrls: ['./tres.component.css']
})
export default class TresComponent {

}
