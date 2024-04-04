import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { first } from 'rxjs/operators';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Observable } from 'rxjs';
import { AddressFormService } from '../services/address-form.service';
import { Address } from '@app/shared/interfaces/address.interface';

export const AddressResolver: ResolveFn<Address> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  addressService: AddressFormService = inject(AddressFormService)
): Observable<any> => {
  const mode = route.data.mode as DataMode;

  if (mode === DataMode.edit || mode === DataMode.view) {
    return addressService
      .buildForm({
        addressId: route.paramMap.get('id') as string,
        mode,
      })
      .pipe(first());
  }

  return addressService.buildForm({ mode }).pipe(first());
};
