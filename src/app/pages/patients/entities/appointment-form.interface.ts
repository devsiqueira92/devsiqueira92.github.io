import { FormControl } from "@angular/forms";
import { DataMode } from "@app/shared/helpers/datamode.helper";
import { FormIsSubmiting } from "@app/shared/helpers/form.helper";
import { Patient } from "@app/shared/interfaces/patient.interface";

interface PatientForm extends FormIsSubmiting {
    id?: FormControl<string | null>;
    name?: FormControl<string | null>;
    phone?: FormControl<string | null>;
    address?: FormControl<string | null>;
    birthDate?: FormControl<string | null>;
  }
  
  interface PatientFormInput {
    mode: DataMode;
    patientId?: string;
  }
  
  interface PatientFormOutput {
    mode: DataMode;
    patient?: Patient;
  }
  
  export { PatientFormInput, PatientFormOutput, PatientForm };
  