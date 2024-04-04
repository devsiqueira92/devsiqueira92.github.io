import { FormControl } from '@angular/forms';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { FormIsSubmiting } from '@app/shared/helpers/form.helper';
import { MedicalAppointment } from '@app/shared/interfaces/medical-appointment.interface';

interface MedicalAppointmentForm extends FormIsSubmiting {
  id?: FormControl<string | null>;
  schedulingId?: FormControl<string | null>;
  beatsPerMinute?: FormControl<string | null>;
  bloodOxygenation?: FormControl<string | null>;
  bloodPressure?: FormControl<string | null>;
  notes?: FormControl<string | null>;
  evolution?: FormControl<string | null>;
  weight?: FormControl<string | null>;
  status?: FormControl<boolean | null>;
}

interface MedicalAppointmentFormInput {
  mode: DataMode;
  medicalAppointmentId?: string;
}

interface MedicalAppointmentFormOutput {
  mode: DataMode;
  medicalAppointment?: MedicalAppointment;
}

export {
  MedicalAppointmentFormInput,
  MedicalAppointmentFormOutput,
  MedicalAppointmentForm,
};
