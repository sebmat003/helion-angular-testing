import { Routes } from '@angular/router';
import { SimpleComponent } from './examples/1-simple/simple.component';
import { AbstractClassUsageComponent } from './examples/10-abstract-class/abstract-class-usage.component';
import { UtilsUsageComponent } from './examples/9-utils/utils-usage.component';
import { NgrxStoreUsageComponent } from './examples/8-ngrx-store/ngrx-store-usage.component';
import { InterceptorUsageComponent } from './examples/7-interceptor/interceptor-usage.component';
import { ComplexComponent } from './examples/5-complex/complex.component';
import { DirectiveUsageComponent } from './examples/4-directive/directive-usage.component';
import { PipeUsageComponent } from './examples/3-pipe/pipe-usage.component';
import { ServiceUsageComponent } from './examples/2-service/service-usage.component';
import { GUARD_ROUTES } from './examples/6-guard/guard.routes';

export enum Paths {
  SIMPLE_COMPONENT = '1',
  SERVICE = '2',
  PIPE = '3',
  DIRECTIVE = '4',
  COMPLEX_COMPONENT = '5',
  GUARD = '6',
  INTERCEPTOR = '7',
  NGRX_STORE = '8',
  UTILS = '9',
  ABSTRACT_CLASS = '10',
}

export const routes: Routes = [
  {
    path: Paths.SIMPLE_COMPONENT,
    loadComponent: () => SimpleComponent,
  },
  {
    path: Paths.SERVICE,
    loadComponent: () => ServiceUsageComponent,
  },
  {
    path: Paths.PIPE,
    loadComponent: () => PipeUsageComponent,
  },
  {
    path: Paths.DIRECTIVE,
    loadComponent: () => DirectiveUsageComponent,
  },
  {
    path: Paths.COMPLEX_COMPONENT,
    loadComponent: () => ComplexComponent,
  },
  {
    path: Paths.GUARD,
    loadChildren: () => GUARD_ROUTES,
  },
  {
    path: Paths.INTERCEPTOR,
    loadComponent: () => InterceptorUsageComponent,
  },
  {
    path: Paths.NGRX_STORE,
    loadComponent: () => NgrxStoreUsageComponent,
  },
  {
    path: Paths.UTILS,
    loadComponent: () => UtilsUsageComponent,
  },
  {
    path: Paths.ABSTRACT_CLASS,
    loadComponent: () => AbstractClassUsageComponent,
  },
];
