import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ErrorService } from './services/error.service';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-interceptor-usage',
  standalone: true,
  template: `<button (click)="sendErrorRequest()">Send error request</button>`,
  styles: `
  ::ng-deep .mat-mdc-snackbar-surface {
    background-color: #B22222 !important;
  }
`,
})
export class InterceptorUsageComponent implements OnInit, OnDestroy {
  private readonly errorService = inject(ErrorService);
  private readonly snackBar = inject(MatSnackBar);
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.errorService.error$
      .pipe(takeUntil(this.destroy$))
      .subscribe((error: string) => {
        this.snackBar.open(`Error occurred: ${error}`, undefined, {
          duration: 2500,
        });
      });
  }

  sendErrorRequest() {
    this.errorService.sendErrorRequest().subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
