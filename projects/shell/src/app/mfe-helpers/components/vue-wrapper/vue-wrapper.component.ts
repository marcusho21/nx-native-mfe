import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, inject } from '@angular/core';
import { WrapperConfig } from '../../types/mfe-wrapper';
import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  selector: 'app-vue-wrapper',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>vue-wrapper works!</p>`,
  styleUrl: './vue-wrapper.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VueWrapperComponent implements OnInit {
  config: WrapperConfig = {
    remoteName: 'vue-app',
    exposedModule: './App',
    elementName: 'vue-app',
  };
  private elRef = inject(ElementRef);
  private document = inject(DOCUMENT);
  
  async ngOnInit() {
    await this.loadRemoteComponent();
  }

  private async loadRemoteComponent() {
    const { exposedModule, remoteName, elementName } = this.config;

    await loadRemoteModule(remoteName, exposedModule);
    const component = this.document.createElement(elementName);
    this.elRef.nativeElement.appendChild(component);
  }
 }
