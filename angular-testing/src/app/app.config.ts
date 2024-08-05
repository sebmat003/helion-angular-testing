import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { errorInterceptor } from './examples/7-interceptor/interceptor';
import { provideStore } from '@ngrx/store';
import { productsReducer } from './examples/8-ngrx-store/state/reducers/reducers';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from './examples/8-ngrx-store/state/effects/effects';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideAnimations(),
    provideCharts(withDefaultRegisterables()),
    provideStore({ products: productsReducer }),
    provideEffects([ProductEffects]),
    provideStoreDevtools(),
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { minWidth: '50vw', hasBackdrop: true },
    },
  ],
};
