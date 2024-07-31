import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-ngrx-store-usage',
  standalone: true,
  template: `<app-products></app-products>`,
  imports: [ProductsComponent],
})
export class NgrxStoreUsageComponent {}
