import { ExpenseCategory } from './../../models/data.models';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-filters',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './table-filters.component.html',
  styleUrl: './table-filters.component.scss',
})
export class TableFiltersComponent {
  categories = Object.keys(ExpenseCategory);
}
