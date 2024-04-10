import { bootstrapApplication } from "@angular/platform-browser";
import { MainComponent } from "./app/components/main/main.component";


bootstrapApplication(MainComponent)
  .catch(err => console.error(err));
