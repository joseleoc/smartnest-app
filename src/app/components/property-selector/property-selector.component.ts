import { Component, signal } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-property-selector',
  templateUrl: './property-selector.component.html',
  styleUrls: ['./property-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PropertySelectorComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PropertySelectorComponent,
    },
  ],
  standalone: true,
  imports: [IonSelect, IonSelectOption, TranslocoModule],
})
export class PropertySelectorComponent {
  // -----------------------------------------------------------------------------------------------------
  // @ Local properties
  // -----------------------------------------------------------------------------------------------------
  value = signal('');
  onChange = (value: string) => {};
  onTouched = () => {};

  touched = false;
  disabled = false;
  required = false;

  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /** To set the value of the selector */
  onSetValue(value: string) {
    this.markAsTouched();
    if (!this.disabled) {
      this.value.set(value);
      this.onChange(this.value());
    }
  }

  /** Used in angular's forms to set the value with the parent form */
  writeValue(value: string) {
    this.value.set(value);
  }

  /** Used in angular's forms to register the onChange events */
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  /** Used in angular's forms to register the onTouched events. */
  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  /** Used in angular's forms to mark as touched a control. */
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  /** Used in angular's forms to disable the control. */
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  /** Used in angular's forms to validate the control. */
  validate(control: AbstractControl): ValidationErrors | null | undefined {
    return control.invalid ? { internal: true } : null;
  }
}
