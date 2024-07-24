import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';
import { LoaderComponent } from './components/loader.component';
import { LoaderDirective } from './directive';
import { ViewContainerRef } from '@angular/core';

describe('LoaderDirective', () => {
  let spectator: SpectatorDirective<LoaderDirective>;
  const createDirective = createDirectiveFactory({
    directive: LoaderDirective,
    detectChanges: false,
    providers: [ViewContainerRef],
  });

  it('should get the instance', () => {
    spectator = createDirective(`<div *appLoader></div>`);

    expect(spectator.directive).toBeTruthy();
  });

  it('should show the loader component when loading is true', () => {
    spectator = createDirective(`<div *appLoader="true"></div>`);
    jest.spyOn(spectator.directive['vcRef'], 'createComponent');

    spectator.detectChanges();

    expect(spectator.query(LoaderComponent)).toBeTruthy();
    expect(spectator.directive['vcRef'].createComponent).toHaveBeenCalledWith(
      LoaderComponent
    );
  });

  it('should show the original content when loading is false', () => {
    spectator = createDirective(`<div *appLoader="false"></div>`);
    jest.spyOn(spectator.directive['vcRef'], 'createEmbeddedView');

    spectator.detectChanges();

    expect(spectator.query(LoaderComponent)).toBeFalsy();
    expect(
      spectator.directive['vcRef'].createEmbeddedView
    ).toHaveBeenCalledWith(spectator.directive['templateRef']);
  });
});
