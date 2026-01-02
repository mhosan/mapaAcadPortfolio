import { Component } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-main',
    imports: [
    RouterModule,
    RouterOutlet
],
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent {

}
