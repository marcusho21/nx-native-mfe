import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'nx-native-mfe-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  // Component used to bootstrap the application (local dev used only)
}
