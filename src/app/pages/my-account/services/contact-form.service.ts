import { Injectable } from '@angular/core';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import {
  ContactFormInput,
  ContactFormOutput,
} from '@app/shared/interfaces/contact-form.interface';
import { ContactService } from '@app/shared/services/contact.service';
import { Observable, map, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  constructor(private contactService: ContactService) {}

  buildForm(params: ContactFormInput): Observable<ContactFormOutput> {
    const { mode, contactId } = params;
    let result: Observable<ContactFormOutput>;

    switch (mode) {
      case DataMode.create:
        result = of({ mode });
        break;
      case DataMode.edit:
      case DataMode.view:
        result = this.buildEditForm(mode, contactId as string);
        break;

      default:
        throw new Error(`Data mode is not recognized: ${mode}`);
    }

    return result;
  }

  buildEditForm(
    mode: DataMode,
    contactId: string
  ): Observable<ContactFormOutput> {
    return this.contactService.getById(contactId).pipe(
      take(1),
      map((contact) => ({ contact, mode } as ContactFormOutput))
    );
  }
}
