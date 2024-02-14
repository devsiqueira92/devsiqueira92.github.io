import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  first,
  map,
  tap,
} from 'rxjs/operators';
import { logDebug } from './log.helper';

interface FormIsSubmiting {
  isSubmitting?: FormControl<boolean | null>;
}

interface PasswordCheck {
  passwordCheck?: string | undefined;
}

interface FormCaptcha {
  recaptchaToken?: string;
}

/* eslint-disable complexity, max-statements */
const checkForm = <T>(
  formGroup: FormGroup | FormGroup | FormControl,
  onValid?: () => void,
  onError?: () => void
) => {
  if (onValid || onError) {
    (formGroup.statusChanges as Observable<any>)
      .pipe(
        debounceTime(100),
        map(() => formGroup.valid),
        first(),
        tap((valid) => {
          if (valid && onValid) {
            onValid();
          } else if (!valid && onError) {
            onError();
          }
        })
      )
      .subscribe();
  }

  if (formGroup instanceof FormGroup) {
    for (const key of Object.keys(formGroup.controls)) {
      // @ts-ignore
      const control = formGroup.controls[key];
      control.updateValueAndValidity();

      if (control instanceof FormArray) {
        const formArray = control as FormArray;
        formArray.controls.forEach((c: any) => {
          checkForm(c);
        });
      }

      if (control instanceof FormGroup) {
        checkForm(control);
      }

      if (control.invalid) {
        logDebug(`${key} control is invalid with value ${control.value}.`);
      }
    }
  }

  if (formGroup instanceof FormControl) {
    const control = formGroup;
    control.updateValueAndValidity();

    if (control.invalid) {
      logDebug(`control is invalid with value `, control.value, '.');
    }
  }

  return formGroup.valid === true;
};
/* eslint-enable */

const requiredIf =
  (test: (control: AbstractControl) => boolean) =>
  (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent || test(control) === false) {
      return null;
    }
    return Validators.required(control);
  };

const requiredField = <T>(
  formGroup: AbstractControl,
  attribute: keyof T
): ValidationErrors | null =>
  formGroup.value[attribute]
    ? null
    : { [String(attribute) + 'Required']: true };

const requiredFieldIf = <T>(
  formGroup: AbstractControl,
  attribute: keyof T,
  test: (formGroup: AbstractControl) => boolean
): ValidationErrors | null => {
  if (test(formGroup) === false) {
    return null;
  }
  return requiredField(formGroup, attribute);
};

function greaterThan(
  value: number,
  validatorMessage: string = 'greaterThan'
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = Number(control.value) <= value;
    return forbidden ? { [validatorMessage]: { value: control.value } } : null;
  };
}

const isGreaterThanZero =
  (): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;
    const valueNum = value && value.replace(/'/g, '').replace(/,/g, '.');

    return valueNum > 0 ? null : { notGreaterThanZero: null };
  };

const isSwiftBic =
  (): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;
    // eslint-disable-next-line prefer-named-capture-group, require-unicode-regexp, wrap-regex
    const isValid =
      value &&
      /^[A-Z]{4}[A-Z]{2}[0-9A-Z]{2}([0-9A-Z]{3})?$/.test(value.toUpperCase());

    return isValid ? null : { swiftBicInvalid: null };
  };

const limitAmountValidator =
  (available: number = 0, validatorMessage: string = 'insufficientBalance') =>
  (control: AbstractControl) => {
    const { value } = control;

    return value <= available ? null : { [validatorMessage]: true };
  };

const tdxEmailValidator =
  (): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;
    const emailRegex = /^\S+@\S+\.\S+$/u;

    return value && emailRegex.test(value.toUpperCase())
      ? null
      : { email: null };
  };

export {
  limitAmountValidator,
  checkForm,
  requiredIf,
  requiredField,
  requiredFieldIf,
  greaterThan,
  FormIsSubmiting,
  PasswordCheck,
  FormCaptcha,
  isGreaterThanZero,
  isSwiftBic,
  tdxEmailValidator,
};
