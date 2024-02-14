import { FormControl } from "@angular/forms";
import { DataMode } from "@app/shared/helpers/datamode.helper";
import { FormIsSubmiting } from "@app/shared/helpers/form.helper";
import { Appointment } from "@app/shared/interfaces/appointment.interface";
import { Patient } from "@app/shared/interfaces/patient.interface";
import { Physioterapist } from "@app/shared/interfaces/physioterapist.interface";

interface AppointmentForm extends FormIsSubmiting {
  id?: FormControl<string | null>;
  date?: FormControl<string | null>;
  vitals?: FormControl<string | null>;
  bpm?: FormControl<string | null>;
  bloodOxygenation?: FormControl<string | null>;
  notes?: FormControl<string | null>;
  patient?: FormControl<Patient | null>;
  doctor?: FormControl<Physioterapist | null>;
}
  
  interface AppointmentFormInput {
    mode: DataMode;
    appointmentId?: string;
  }
  
  interface AppointmentFormOutput {
    mode: DataMode;
    appointment?: Appointment;
  }
  
  export { AppointmentFormInput, AppointmentFormOutput, AppointmentForm };
  