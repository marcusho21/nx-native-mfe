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
    loadChildren: () =>
      loadRemoteModule('mfe-app', './mfe-app.routes').then(
        (m) => m.mfeAppRoutes
      ),
  },
  {
    path: 'vue-app',
    loadComponent: () => import('./mfe-helpers/components/vue-wrapper/vue-wrapper.component').then((m) => m.VueWrapperComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
