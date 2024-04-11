import { bootstrapApplication } from "@angular/platform-browser";
import { MainComponent } from "./app/components/main/main.component";
import { provideRouter } from '@angular/router';
import { provideAnimations} from '@angular/platform-browser/animations';
import { routes } from './app/app-routing.module';


bootstrapApplication(MainComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
