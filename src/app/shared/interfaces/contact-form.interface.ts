import { FormControl } from '@angular/forms';
import { FormIsSubmiting } from '../helpers/form.helper';
import { DataMode } from '../helpers/datamode.helper';
import { Contact } from './contact.interface';

interface ContactForm extends FormIsSubmiting {
  id?: FormControl<string | null>;
  contact?: FormControl<string | null>;
  type?: FormControl<string | null>;
}

interface ContactFormInput {
  mode: DataMode;
  contactId?: string;
}

interface ContactFormOutput {
  mode: DataMode;
  contact?: Contact;
}

export { ContactFormInput, ContactFormOutput, ContactForm };
