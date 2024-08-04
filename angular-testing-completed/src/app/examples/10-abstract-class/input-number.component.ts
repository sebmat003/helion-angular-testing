import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AbstractFormControlComponent } from './abstract.class';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  template: `
    <mat-form-field>
      <input
        matInput
        type="number"
        [formControl]="control"
        [placeholder]="placeholder"
        [max]="maxNumber"
        [min]="minNumber"
        data-cy="input-number"
      />
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberComponent extends AbstractFormControlComponent<number> {
  @Input() maxNumber = 10000;
  @Input() minNumber = 0;
  @Input() override placeholder = 'Type a number';
}
