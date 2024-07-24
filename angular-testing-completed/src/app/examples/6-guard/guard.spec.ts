import { TestBed } from '@angular/core/testing';
import { accessGuard } from './guard';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Role } from './models/role.models';
import { Paths } from '../../app.routes';
import { inject, signal } from '@angular/core';

describe('AccessGuard', () => {
  let router: Router;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });
  });

  it.each<[boolean, Role, Role]>([
    [false, 'USER', 'USER'],
    [false, 'ADMIN', 'ADMIN'],
    [true, 'USER', 'ADMIN'],
    [true, 'ADMIN', 'USER'],
    [true, 'OWNER', 'ADMIN'],
  ])(
    'should block access when loggedIn - %s, required role - %s, current role - %s',
    (loggedIn, requiredRole, currentRole) => {
      TestBed.runInInjectionContext(() => {
        router = inject(Router);
        authService = inject(AuthService);
        authService.loggedIn = signal(loggedIn);
        authService.role = currentRole;

        const guard = accessGuard(requiredRole);

        expect(guard()).toEqual(router.createUrlTree([Paths.GUARD]));
      });
    }
  );

  it.each<[boolean, Role, Role]>([
    [true, 'USER', 'USER'],
    [true, 'ADMIN', 'ADMIN'],
    [true, 'USER', 'OWNER'],
    [true, 'ADMIN', 'OWNER'],
  ])(
    'should access the URL when loggedIn - %s, required role - %s, current role - %s',
    (loggedIn, requiredRole, currentRole) => {
      TestBed.runInInjectionContext(() => {
        router = inject(Router);
        authService = inject(AuthService);
        authService.loggedIn = signal(loggedIn);
        authService.role = currentRole;

        const guard = accessGuard(requiredRole);

        expect(guard()).toEqual(true);
      });
    }
  );
});
