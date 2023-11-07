import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() label!: string;

  @Output() value = new EventEmitter<string>();

  disabled: boolean = false;

  onChange: (value: string) => void = (_: string) => { };
  onTouched: () => void = () => { };

  writeValue(value: string): void {
    this.value.emit(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;

    if (!this.disabled) {
      this.value.emit(value);
      this.onChange(value);
      this.onTouched();
    }
  }
}
