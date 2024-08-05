import { Component } from '@angular/core';

@Component({
  selector: 'app-guarded-page',
  standalone: true,
  template: `<p>Guarded page - {{ url }}</p>`,
})
export class GuardedPageComponent {
  url = window.location.href;
}
