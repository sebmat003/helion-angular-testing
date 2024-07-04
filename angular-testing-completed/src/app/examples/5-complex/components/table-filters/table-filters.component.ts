import { ExpenseCategory } from './../../models/data.models';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Filters } from '../../models/filters.models';

@Component({
  selector: 'app-table-filters',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './table-filters.component.html',
  styleUrl: './table-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFiltersComponent {
  filters = output<Filters>();
  form = new FormGroup<{
    categories: FormControl<ExpenseCategory[]>;
    year: FormControl<number | null>;
  }>({
    categories: new FormControl(),
    year: new FormControl(null, [
      Validators.min(2000),
      Validators.max(new Date().getFullYear()),
    ]),
  });
  categories = Object.keys(ExpenseCategory);

  submitForm() {
    this.filters.emit(this.form.getRawValue());
  }
}
