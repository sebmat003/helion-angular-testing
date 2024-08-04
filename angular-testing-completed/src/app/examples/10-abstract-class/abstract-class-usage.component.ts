import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputNumberComponent } from './input-number.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-abstact-class-usage',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    InputNumberComponent,
    MatButtonModule,
  ],
  template: `<form [formGroup]="form" (ngSubmit)="submit()">
    <app-input-number formControlName="control"></app-input-number>
    <button mat-button type="submit" [disabled]="form.invalid" data-cy="submit-form">Submit</button>
  </form> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractClassUsageComponent {
  form = new FormGroup({
    control: new FormControl(0),
  });

  submit() {
    console.log(this.form.controls.control.getRawValue());
  }
}
