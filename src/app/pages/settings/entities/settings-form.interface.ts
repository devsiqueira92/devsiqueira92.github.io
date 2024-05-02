import { FormControl } from '@angular/forms';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { FormIsSubmiting } from '@app/shared/helpers/form.helper';

interface SettingsForm extends FormIsSubmiting {
  id?: FormControl<string | null>;
  startTime: FormControl<Date | null>;
  endTime: FormControl<Date | null>;
}
interface SettingsFormInput {
  mode: DataMode;
  settingId?: string;
}

interface SettingsFormOutput {
  mode: DataMode;
  setting?: SettingsForm;
}

export { SettingsFormInput, SettingsFormOutput, SettingsForm };
