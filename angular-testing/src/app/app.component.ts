import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styles: `
    .container {
        display: flex;
        justify-content: flex-start
    }
    `,
  imports: [RouterOutlet, SidebarComponent],
})
export class AppComponent {}
