import { FormControl } from '@angular/forms';
import { FormIsSubmiting } from '../helpers/form.helper';
import { DataMode } from '../helpers/datamode.helper';
import { Address } from './address.interface';

interface AddressForm extends FormIsSubmiting {
  id?: FormControl<string | null>;
  street?: FormControl<string | null>;
  city?: FormControl<string | null>;
  number?: FormControl<string | null>;
  postalCode?: FormControl<string | null>;
}

interface AddressFormInput {
  mode: DataMode;
  addressId?: string;
}

interface AddressFormOutput {
  mode: DataMode;
  address?: Address;
}

export { AddressFormInput, AddressFormOutput, AddressForm };
