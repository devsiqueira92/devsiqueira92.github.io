import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { first } from 'rxjs/operators';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Observable } from 'rxjs';
import { Contact } from '@app/shared/interfaces/contact.interface';
import { ContactFormService } from '../services/contact-form.service';

export const ContactResolver: ResolveFn<Contact> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  contactService: ContactFormService = inject(ContactFormService)
): Observable<any> => {
  const mode = route.data.mode as DataMode;

  if (mode === DataMode.edit || mode === DataMode.view) {
    return contactService
      .buildForm({
        contactId: route.paramMap.get('id') as string,
        mode,
      })
      .pipe(first());
  }

  return contactService.buildForm({ mode }).pipe(first());
};
