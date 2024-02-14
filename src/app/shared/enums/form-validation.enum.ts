import { AbstractControl } from '@angular/forms';

enum FormValidationStatus {
  success = 'success',
  warning = 'warning',
  error = 'error',
}

const displayWarning = (
  ctrl: AbstractControl | undefined,
  isSubmitting: boolean | null
): FormValidationStatus | boolean => {
  if (ctrl?.status === 'VALID') {
    return FormValidationStatus.success;
  }

  if (!ctrl?.pristine) {
    return FormValidationStatus.warning;
  }

  if (isSubmitting) {
    return FormValidationStatus.error;
  }

  return false;
};
export { FormValidationStatus, displayWarning };
