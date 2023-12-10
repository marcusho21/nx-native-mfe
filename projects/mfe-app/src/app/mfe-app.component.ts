import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'mfe-app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <h1>I'm a micro frontend</h1>
    <h2>Type: Application</h2>

    <nav>
      <a routerLink="/mfe-app/sub-route" routerLinkActive="active"
        >Sub Route One</a
      >
      <a routerLink="/mfe-app/sub-route-two" routerLinkActive="active"
        >Sub Route two</a
      >
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class MfeAppComponent {}
