import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-guard-usage',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <button (click)="authService.login('ADMIN')">Login as Admin</button>
    <button (click)="authService.login('USER')">Login as User</button>
    <button (click)="authService.login('OWNER')">Login as Owner</button>
    <button (click)="authService.logout()">Logout</button>
    <hr />
    <button routerLink="admin">Go to the "Admin" page</button>
    <button routerLink="user">Go to the "User" page</button>
    <br />
    <router-outlet></router-outlet>
  `,
})
export class GuardUsageComponent {
  authService = inject(AuthService);
}
