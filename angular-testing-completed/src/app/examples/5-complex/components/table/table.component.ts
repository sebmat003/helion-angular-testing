import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Expense } from '../../models/data.models';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  imports: [MatTableModule, MatPaginatorModule, SummaryComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnChanges, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  expenses = input.required<Expense[]>();
  displayedColumns: string[] = ['id', 'date', 'name', 'category', 'sum'];
  dataSource = new MatTableDataSource<Expense>();

  ngOnChanges(): void {
    this.dataSource.data = this.expenses();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
