import { FormControl } from '@angular/forms';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { FormIsSubmiting } from '@app/shared/helpers/form.helper';
import { Scheduling } from '@app/shared/interfaces/scheduling.interface';
import { Patient } from '@app/shared/interfaces/patient.interface';
import { Physioterapist } from '@app/shared/interfaces/physioterapist.interface';

interface SchedulingForm extends FormIsSubmiting {
  id?: FormControl<string | null>;
  date?: FormControl<Date | null>;
  time?: FormControl<Date | null>;
  vitals?: FormControl<string | null>;
  bpm?: FormControl<string | null>;
  bloodOxygenation?: FormControl<string | null>;
  notes?: FormControl<string | null>;
  status?: FormControl<boolean | null>;
  patient?: FormControl<string | null>;
  doctor?: FormControl<Physioterapist | null>;
}

interface SchedulingFormInput {
  mode: DataMode;
  schedulingId?: string;
}

interface SchedulingFormOutput {
  mode: DataMode;
  scheduling?: Scheduling;
}

export { SchedulingFormInput, SchedulingFormOutput, SchedulingForm };
