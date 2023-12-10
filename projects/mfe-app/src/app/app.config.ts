import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { mfeAppRoutes } from './mfe-app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(mfeAppRoutes)],
};
