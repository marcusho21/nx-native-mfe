import { Route } from '@angular/router';

export const mfeAppRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./mfe-app.component').then((m) => m.MfeAppComponent),
    children: [
      {
        path: 'sub-route',
        loadComponent: () =>
          import('./sub-route.component').then((m) => m.SubRouteComponent),
      },
      {
        path: 'sub-route-two',
        loadComponent: () =>
          import('./sub-route-two.component').then(
            (m) => m.SubRouteTwoComponent
          ),
      },
    ],
  },
  {
    path: 'mfe-app',
    redirectTo: '',
  },
];
