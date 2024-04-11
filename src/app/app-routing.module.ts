import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { CadComponent } from './components/cad/cad.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'cad', component: CadComponent },
  {
    path: 'portfolio',
    loadComponent: () => import('./components/portfolio/portfolio.component').then(
      m => m.PortfolioComponent)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];


/* 
{
    path: 'portfolio',
    loadChildren: () => import('./components/portfolioFolder/routes')
  },
 */
