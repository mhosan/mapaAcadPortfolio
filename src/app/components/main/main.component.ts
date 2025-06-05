import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        RouterOutlet
    ],
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent {

}
