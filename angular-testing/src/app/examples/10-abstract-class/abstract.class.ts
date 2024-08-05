import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { Directive, Input, Optional, Self } from '@angular/core';

@Directive()
export abstract class AbstractFormControlComponent<T = any>
  implements ControlValueAccessor
{
  @Input() placeholder = 'Placeholder';

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }

  writeValue() {}

  registerOnChange() {}

  registerOnTouched() {}
}
