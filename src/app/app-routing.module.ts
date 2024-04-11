import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { CadComponent } from './components/cad/cad.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


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
      { path: '**',
        redirectTo: 'uno'
      }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'cad', component: CadComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

