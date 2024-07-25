import {
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from './services/error.service';
import { inject } from '@angular/core';

export const errorInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const errorService = inject(ErrorService);

  return next(request).pipe(
    catchError((error: HttpErrorResponse): Observable<HttpEvent<unknown>> => {
      const errorMessage = error.message || error.error.message;
      errorService.error$.next(errorMessage);

      return throwError(() => errorMessage);
    })
  );
};
