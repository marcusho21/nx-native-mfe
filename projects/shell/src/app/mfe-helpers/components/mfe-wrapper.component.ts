import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { initWrapperConfig } from '../types/mfe-wrapper';

@Component({
  selector: 'mfe-el-wrapper',
  standalone: true,
  template: ``,
})
export class WrapperComponent implements OnInit {
  private elRef = inject(ElementRef);
  private document = inject(DOCUMENT);

  @Input() config = initWrapperConfig;

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
