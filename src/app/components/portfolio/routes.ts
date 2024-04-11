import { Route } from "@angular/router";
import { UnoComponent } from "./uno/uno.component";
import { DosComponent } from "./dos/dos.component";
import { TresComponent } from "./tres/tres.component";

export default [
    { path: '', component: UnoComponent},
    { path: '/dos', component: DosComponent},
    { path: 'tres', component: TresComponent}
] as Route[];
