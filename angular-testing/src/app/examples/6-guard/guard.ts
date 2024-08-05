import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Role } from './models/role.models';
import { Router } from '@angular/router';
import { Paths } from '../../app.routes';

export const accessGuard = (role: Role) => () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (
    authService.loggedIn() &&
    (authService.role === role || authService.role === 'OWNER')
  ) {
    return true;
  }

  return router.createUrlTree([Paths.GUARD]);
};
