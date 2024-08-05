import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div class="spinner" data-cy="loading-spinner"></div>`,
  standalone: true,
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {}
