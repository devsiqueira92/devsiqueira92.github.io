import { FormControl } from "@angular/forms";
import { FormIsSubmiting } from "@app/shared/helpers/form.helper";

interface RegisterForm extends FormIsSubmiting {
    name?: FormControl<string | null>;
    address?: FormControl<string | null>;
    phone?: FormControl<string | null>;
    identificationNumber?: FormControl<string | null>;
}

export { RegisterForm }