import { GuardedPageComponent } from './components/guarded-page/guarded-page.component';
import { accessGuard } from './guard';
import { GuardUsageComponent } from './guard-usage.component';

export const GUARD_ROUTES = [
  {
    path: '',
    loadComponent: () => GuardUsageComponent,
    children: [
      {
        path: 'admin',
        loadComponent: () => GuardedPageComponent,
        canActivate: [accessGuard('ADMIN')],
      },
      {
        path: 'user',
        loadComponent: () => GuardedPageComponent,
        canActivate: [accessGuard('USER')],
      },
    ],
  },
];
