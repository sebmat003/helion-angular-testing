import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../models/role.models';
import { Paths } from '../../../app.routes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly router = inject(Router);

  role: Role = 'USER';
  loggedIn = signal(false);

  login(role: Role) {
    this.loggedIn.set(true);
    this.role = role;
  }

  logout() {
    this.loggedIn.set(false);
    this.router.navigateByUrl(Paths.GUARD);
  }
}
