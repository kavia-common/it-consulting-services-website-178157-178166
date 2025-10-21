import { AbstractControl, ValidationErrors } from '@angular/forms';

// PUBLIC_INTERFACE
/** Example validator ensuring a control value does not contain only whitespace. */
export function notBlank(control: AbstractControl): ValidationErrors | null {
  const v = (control.value ?? '') as string;
  if (typeof v === 'string' && v.trim().length === 0 && v.length > 0) {
    return { notBlank: true };
  }
  return null;
}
