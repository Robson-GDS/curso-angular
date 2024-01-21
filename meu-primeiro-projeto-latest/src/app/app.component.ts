import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindingComponent],
  template: `
    <!-- <router-outlet /> -->
    <h1>Curso de Angular</h1>
    <!-- <app-new-component /> -->
    <app-template-binding />
  `
})
export class AppComponent {}