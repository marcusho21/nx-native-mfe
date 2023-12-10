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
  // This is needed for local development to allow:
  // 1. use the mfe-app route in the shell app
  // 2. local development have no mfe-app route so we redirect to the root since mfe-app route doesn't exist locally
  {
    path: 'mfe-app',
    redirectTo: '',
  },
];
