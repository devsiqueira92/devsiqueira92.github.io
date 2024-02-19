import { FormControl } from '@angular/forms';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { FormIsSubmiting } from '@app/shared/helpers/form.helper';
import { Physioterapist } from '@app/shared/interfaces/physioterapist.interface';

interface PhysioterapistForm extends FormIsSubmiting {
  id?: FormControl<string | null>;
  name?: FormControl<string | null>;
  birthDate?: FormControl<Date | null>;
}
interface PhysioterapistFormInput {
  mode: DataMode;
  physioterapistId?: string;
}

interface PhysioterapistFormOutput {
  mode: DataMode;
  physioterapist?: Physioterapist;
}

export {
  PhysioterapistFormInput,
  PhysioterapistFormOutput,
  PhysioterapistForm,
};
