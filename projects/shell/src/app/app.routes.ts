import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./home/components/home.component').then((m) => m.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'mfe-app',
    loadComponent: () =>
      loadRemoteModule('mfe-app', './Component').then((m) => m.AppComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
