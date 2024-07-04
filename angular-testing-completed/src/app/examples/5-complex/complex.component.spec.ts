import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ComplexComponent } from './complex.component';
import { TableComponent } from './components/table/table.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TableFiltersComponent } from './components/table-filters/table-filters.component';
import { DataService } from './services/data.service';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

describe('ComplexComponent', () => {
  let spectator: Spectator<ComplexComponent>;
  let component: ComplexComponent;
  const createComponent = createComponentFactory({
    component: ComplexComponent,
    imports: [TableComponent, SummaryComponent, TableFiltersComponent],
    providers: [DataService, provideCharts(withDefaultRegisterables())],
    declareComponent: false,
    detectChanges: false,
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should match the snapshot', () => {
    spectator.detectChanges();

    expect(spectator.fixture).toMatchSnapshot();
  });
});
