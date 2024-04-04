import { FormControl } from '@angular/forms';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { FormIsSubmiting } from '@app/shared/helpers/form.helper';
import { Clinic } from '@app/shared/interfaces/clinic.interface';

interface ClinicForm extends FormIsSubmiting {
  name?: FormControl<string | null>;
  identificationNumber?: FormControl<string | null>;
}

interface ClinicFormInput {
  mode: DataMode;
  clinicId?: string;
}

interface ClinicFormOutput {
  mode: DataMode;
  clinic?: Clinic;
}

export { ClinicFormInput, ClinicFormOutput, ClinicForm };
