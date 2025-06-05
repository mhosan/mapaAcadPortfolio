import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-uno',
    standalone: true,
    templateUrl: './uno.component.html',
    styleUrls: ['./uno.component.css'],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export default class UnoComponent {

}
