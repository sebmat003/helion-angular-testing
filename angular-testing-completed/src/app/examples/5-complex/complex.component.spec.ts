import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ComplexComponent } from './complex.component';
import { TableComponent } from './components/table/table.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TableFiltersComponent } from './components/table-filters/table-filters.component';
import { DataService } from './services/data.service';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { expensesMock } from './testing/data.mocks';
import { BehaviorSubject } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { ChartData } from 'chart.js';

const allExpenses$ = new BehaviorSubject(expensesMock);

@Injectable()
class mockedDataService extends DataService {
  override expenses = expensesMock;

  override getAllExpenses = () => allExpenses$;
}

describe('ComplexComponent', () => {
  let spectator: Spectator<ComplexComponent>;
  const createComponent = createComponentFactory({
    component: ComplexComponent,
    imports: [TableComponent, SummaryComponent, TableFiltersComponent],
    componentProviders: [
      {
        provide: DataService,
        useClass: mockedDataService,
      },
      provideCharts(withDefaultRegisterables()),
    ],
    declareComponent: false,
    detectChanges: false,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  const waitForViewUpdate = async () => {
    spectator.detectChanges();
    await spectator.fixture.whenStable().then();
    spectator.detectChanges();
  };

  describe('should match the snapshot', () => {
    it('for initial view', async () => {
      await waitForViewUpdate();

      expect(spectator.fixture).toMatchSnapshot();
    });

    it('when the page is set to 2', async () => {
      await waitForViewUpdate();

      spectator.click(
        spectator.query('.mat-mdc-paginator-navigation-next') as HTMLElement
      );

      expect(spectator.fixture).toMatchSnapshot();
    });

    it('when no data occurs', async () => {
      allExpenses$.next([]);

      await waitForViewUpdate();

      expect(spectator.fixture).toMatchSnapshot();
    });
  });

  it.each([
    [expensesMock, expensesMock[0], [...expensesMock, ...expensesMock]],
  ])('should display correct number of data in table', async (expenses) => {
    allExpenses$.next(expenses);

    await waitForViewUpdate();

    expect(
      spectator.query('.mat-mdc-paginator-range-label')?.textContent?.trim()
    ).toBe(`1 – 5 of ${expenses.length}`);
  });

  it('should filter the data', async () => {
    await waitForViewUpdate();

    const input = spectator.query('mat-form-field input') as HTMLInputElement;
    input.value = '2020';
    input.dispatchEvent(new Event('input'));
    const select = spectator.debugElement.query(
      By.css('.mat-mdc-select-trigger')
    ).nativeElement;
    select.click();
    spectator.detectChanges();
    const carOption = spectator.debugElement.query(
      By.css('.mat-mdc-option')
    ).nativeElement;
    carOption.click();
    spectator.click(spectator.query('button') as HTMLButtonElement);
    await waitForViewUpdate();

    expect(
      spectator.query('.mat-mdc-paginator-range-label')?.textContent?.trim()
    ).toBe(`1 – 2 of 2`);
    expect(spectator.queryAll('td').map((td) => td.textContent)).toEqual([
      '1',
      '2020-02-02',
      'mechanic',
      'Car',
      '50 $',
      '3',
      '2020-03-15',
      'fuel',
      'Car',
      '20.1 $',
    ]);
  });

  it('should set correct labels and values in chart', async () => {
    await waitForViewUpdate();

    const input = spectator.query('mat-form-field input') as HTMLInputElement;
    input.value = '2020';
    input.dispatchEvent(new Event('input'));
    spectator.click(spectator.query('button') as HTMLButtonElement);
    await waitForViewUpdate();

    const pieChartData: ChartData<'pie', number[], string | string[]> =
      spectator.debugElement.query(By.directive(SummaryComponent))
        .componentInstance.pieChartData;
    expect(pieChartData.datasets[0].data).toEqual([70.1, 45]);
    expect(pieChartData.labels).toEqual(['Car', 'Debt']);
  });
});
