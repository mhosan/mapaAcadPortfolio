import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { CadComponent } from './components/cad/cad.component';
import { ImgToTxtComponent } from './components/imgToTxt/imgToTxt.component';
import { Llm7ChatComponent } from './components/llm7-chat/llm7-chat.component';
import { IaComponent } from './components/ia/ia.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', loadComponent: () => import('./components/portfolio/portfolio.component'),
    children: [
      { path: 'uno',
      title: "Uno",
        loadComponent: () => import('./components/portfolio/uno/uno.component')
      },
      { path: 'dos', 
        title: "Dos",
        loadComponent: () => import("./components/portfolio/dos/dos.component") 
      },
      { path: 'tres',
        title: "Tres", 
        loadComponent: () => import("./components/portfolio/tres/tres.component") 
      },
      { path: 'cuatro',
        title: "Cuatro", 
        loadComponent: () => import("./components/portfolio/cuatro/cuatro.component") 
      },
      { path: '**',
        redirectTo: 'dos'
      }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'cad', component: CadComponent },
  { path: 'imgToTxt', component: ImgToTxtComponent },
  { path: 'chat', component: IaComponent},
  { path: 'llm7', loadComponent: () => import('./components/llm7-chat/llm7-chat.component').then(m => m.Llm7ChatComponent) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

