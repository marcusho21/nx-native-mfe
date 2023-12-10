import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'mfe-app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="mfe-app-root">
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

      <div class="sub-routes">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: `
    .mfe-app-root {
      border: 1px solid blue;
      margin-block: 1rem;

      .sub-routes {
        border: 1px solid red;
        margin: 1rem;

        &:not(:has(*:not(router-outlet))) {
          display: none;
        }
      }
    }
  `,
})
export class MfeAppComponent {
  // this is the root component for the application (exposed as root route of the micro frontend)
}
