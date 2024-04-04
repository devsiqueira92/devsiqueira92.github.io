import { FormControl } from '@angular/forms';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { FormIsSubmiting } from '@app/shared/helpers/form.helper';
import { Procedure } from '@app/shared/interfaces/procedure.interface';

interface ProcedureForm extends FormIsSubmiting {
  id?: FormControl<string | null>;
  name?: FormControl<string | null>;
  member?: FormControl<string | null>;
  description?: FormControl<string | null>;
}
interface ProcedureFormInput {
  mode: DataMode;
  procedureId?: string;
}

interface ProcedureFormOutput {
  mode: DataMode;
  procedure?: Procedure;
}

export { ProcedureFormInput, ProcedureFormOutput, ProcedureForm };
