import {
  ChangeDetectionStrategy,
  Component,
  EnvironmentInjector,
  inject,
  runInInjectionContext,
  Signal,
} from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DataService } from './services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Expense } from './models/data.models';
import { TableFiltersComponent } from './components/table-filters/table-filters.component';
import { Filters } from './models/filters.models';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-complex',
  standalone: true,
  templateUrl: './complex.component.html',
  styleUrl: './complex.component.scss',
  providers: [DataService],
  imports: [TableComponent, SummaryComponent, TableFiltersComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplexComponent {
  dataService = inject(DataService);
  injector = inject(EnvironmentInjector);
  expenses: Signal<Expense[]> = toSignal(
    this.dataService.getAllExpenses()
  ) as Signal<Expense[]>;

  filtersChange(filters: Filters) {
    runInInjectionContext(this.injector, () => {
      this.expenses = toSignal(
        this.dataService.getFilteredExpenses(filters)
      ) as Signal<Expense[]>;
    });
  }
}
