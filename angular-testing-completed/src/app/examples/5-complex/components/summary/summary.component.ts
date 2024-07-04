import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnChanges,
} from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Expense } from '../../models/data.models';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent implements OnChanges {
  expenses = input.required<Expense[]>();
  pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'left',
      },
    },
  };
  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'],
    datasets: [
      {
        data: [],
      },
    ],
  };
  pieChartType: ChartType = 'pie';

  ngOnChanges() {
    const groupByCategories = this.expenses().reduce((acc: any, expense) => {
      const { category, sum } = expense;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += sum;
      return acc;
    }, {});
    this.pieChartData = {
      labels: Object.keys(groupByCategories),
      datasets: [
        {
          data: Object.values(groupByCategories),
        },
      ],
    };
  }
}
