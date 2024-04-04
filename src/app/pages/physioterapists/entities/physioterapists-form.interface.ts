import { FormControl } from '@angular/forms';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { FormIsSubmiting } from '@app/shared/helpers/form.helper';
import { Physioterapist } from '@app/shared/interfaces/physioterapist.interface';

//Guid id, string name, DateOnly birthDate, string contact, string registerNumber, decimal appointmentValue

interface PhysioterapistForm extends FormIsSubmiting {
  id?: FormControl<string | null>;
  name?: FormControl<string | null>;
  contact?: FormControl<string | null>;
  birthDate?: FormControl<Date | string | null>;
  registerNumber?: FormControl<string | null>;
  appointmentValue?: FormControl<number | null>;
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
