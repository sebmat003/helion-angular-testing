import { Component, inject, Signal } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DataService } from './services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Expense } from './models/data.models';

@Component({
  selector: 'app-complex',
  standalone: true,
  templateUrl: './complex.component.html',
  styleUrl: './complex.component.scss',
  imports: [TableComponent, SummaryComponent],
  providers: [DataService],
})
export class ComplexComponent {
  dataService = inject(DataService);
  expenses: Signal<Expense[]> = toSignal(
    this.dataService.getAllExpenses()
  ) as Signal<Expense[]>;
}
