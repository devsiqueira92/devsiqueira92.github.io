import { FormControl } from '@angular/forms';
import { FormIsSubmiting } from '@app/shared/helpers/form.helper';
//string email, string password, string confirmPassword, short loginType
interface RegisterForm extends FormIsSubmiting {
  email?: FormControl<string | null>;
  password?: FormControl<string | null>;
  confirmPassword?: FormControl<string | null>;
  accountType?: FormControl<string | null>;
}

export { RegisterForm };
