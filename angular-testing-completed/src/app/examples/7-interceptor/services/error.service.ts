import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private readonly http = inject(HttpClient);
  error$ = new Subject<string>();

  sendErrorRequest(): Observable<void> {
    return this.http.get<void>('dummy/api');
  }
}
