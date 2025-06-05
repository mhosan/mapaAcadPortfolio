import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

@Component({
    selector: 'app-dos',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ],
    templateUrl: './dos.component.html',
    styleUrls: ['./dos.component.css']
})
export default class DosComponent {

}
