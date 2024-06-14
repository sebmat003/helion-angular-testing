import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [],
    declareComponent: false,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should be truthy', () => {
    expect(spectator.fixture).toBeTruthy();
  });
});
