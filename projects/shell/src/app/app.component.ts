import { Component, NgZone, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

declare global {
  // Have to use var for hoisting instead of const/let
  // eslint-disable-next-line no-var
  var ngZone: NgZone;
}

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'nx-native-mfe-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // signal just because I can ;)
  title = signal(
    'A POC for Nx + Angular + Native Moderation + Micro Frontend + Web Components'
  );

  constructor() {
    globalThis.ngZone = inject(NgZone);
  }
}
