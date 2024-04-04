import { Injectable } from '@angular/core';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import {
  AddressFormInput,
  AddressFormOutput,
} from '@app/shared/interfaces/address-form.interface';
import { AddressService } from '@app/shared/services/address.service';
import { Observable, of, take, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressFormService {
  constructor(private addressService: AddressService) {}

  buildForm(params: AddressFormInput): Observable<AddressFormOutput> {
    const { mode, addressId } = params;
    let result: Observable<AddressFormOutput>;

    switch (mode) {
      case DataMode.create:
        result = of({ mode });
        break;
      case DataMode.edit:
      case DataMode.view:
        result = this.buildEditForm(mode, addressId as string);
        break;

      default:
        throw new Error(`Data mode is not recognized: ${mode}`);
    }

    return result;
  }

  buildEditForm(
    mode: DataMode,
    addressId: string
  ): Observable<AddressFormOutput> {
    return this.addressService.getById(addressId).pipe(
      take(1),
      map((address) => ({ address, mode } as AddressFormOutput))
    );
  }
}
