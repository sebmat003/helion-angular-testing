import { Component, OnInit } from '@angular/core';
import { LoaderDirective } from './directive';
import { timer } from 'rxjs';

@Component({
  selector: 'app-directive-usage',
  standalone: true,
  imports: [LoaderDirective],
  template: `<div *appLoader="loading">content</div>`,
})
export class DirectiveUsageComponent implements OnInit {
  loading = true;

  ngOnInit() {
    timer(2000).subscribe(() => (this.loading = false));
  }
}
