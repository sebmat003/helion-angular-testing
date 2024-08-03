import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AbstractFormControlComponent } from './abstract.class';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  template: `
    <mat-form-field>
      <input
        matInput
        type="text"
        [formControl]="control"
        [placeholder]="placeholder"
      />
    </mat-form-field>
  `,
})
export class TestComponent extends AbstractFormControlComponent<string> {
  @Input() override placeholder = 'Type a text';
}

describe('AbstractFormControlComponent', () => {
  let spectator: Spectator<TestComponent>;
  const createComponent = createComponentFactory({
    component: TestComponent,
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
    detectChanges: false,
    declareComponent: false,
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.fixture.componentInstance.ngControl = {
      control: new FormControl(),
      valueAccessor: {},
    } as any;
  });

  it('should match the snapshot', () => {
    spectator.detectChanges();

    expect(spectator.fixture).toMatchSnapshot();
  });

  it('should initialize with the correct placeholder', () => {
    spectator.detectChanges();

    expect((spectator.query('input') as HTMLInputElement).placeholder).toBe(
      'Type a text'
    );
  });

  it('should update value on input', () => {
    spectator.detectChanges();
    const input = spectator.query('input') as HTMLInputElement;

    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    spectator.detectChanges();

    expect(spectator.component.control.value).toBe('test');
  });
});
