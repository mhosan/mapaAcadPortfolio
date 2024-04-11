import { bootstrapApplication } from "@angular/platform-browser";
import { MainComponent } from "./app/components/main/main.component";
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimations} from '@angular/platform-browser/animations';
import { routes } from './app/app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";


bootstrapApplication(MainComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    provideRouter(routes, withHashLocation()),
    
  ]
})
  .catch(err => console.error(err));
