import {
  HttpErrorResponse,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { ErrorService } from './services/error.service';
import { errorInterceptor } from './interceptor';
import { TestBed } from '@angular/core/testing';

describe('ErrorInterceptor', () => {
  let errorService: ErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ErrorService,
        provideHttpClient(withInterceptors([errorInterceptor])),
      ],
    });

    errorService = TestBed.inject(ErrorService);
  });

  it('should catch HTTP error and forward it to ErrorService', (done) => {
    const errorSpy = jest.spyOn(errorService.error$, 'next');
    const errorMessage = 'Test error message';
    const mockRequest = new HttpRequest('GET', '/test-url');
    const mockNext = () =>
      throwError(
        () => new HttpErrorResponse({ error: { message: errorMessage } })
      );

    TestBed.runInInjectionContext(() => {
      errorInterceptor(mockRequest, mockNext).subscribe({
        error: (err) => {
          expect(err).toBe(errorMessage);
          expect(errorSpy).toHaveBeenCalledWith(errorMessage);
          done();
        },
      });
    });
  });

  it('should handle request without error normally', (done) => {
    const mockResponse = { test: 123 };
    const mockRequest = new HttpRequest('GET', '/test-url');
    const mockNext = () => of(mockResponse) as any;

    TestBed.runInInjectionContext(() => {
      errorInterceptor(mockRequest, mockNext).subscribe((response) => {
        expect(response).toEqual(mockResponse);
        done();
      });
    });
  });
});
