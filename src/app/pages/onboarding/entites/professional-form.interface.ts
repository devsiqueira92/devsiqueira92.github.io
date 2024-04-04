import { FormControl } from '@angular/forms';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { FormIsSubmiting } from '@app/shared/helpers/form.helper';
import { Professional } from '@app/shared/interfaces/professional.interface';

interface ProfessionalForm extends FormIsSubmiting {
  name?: FormControl<string | null>;
  registerNumber?: FormControl<string | null>;
  appointmentValue?: FormControl<number | null>;
  birthDate?: FormControl<Date | null>;
}

interface ProfessionalFormInput {
  mode: DataMode;
  professionalId?: string;
}

interface ProfessionalFormOutput {
  mode: DataMode;
  professional?: Professional;
}

export { ProfessionalFormInput, ProfessionalFormOutput, ProfessionalForm };
