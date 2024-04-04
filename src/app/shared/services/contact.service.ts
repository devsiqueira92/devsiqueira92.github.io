import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@root/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  getById(id: string | null): Observable<Contact> {
    return this.httpClient.get<Contact>(`${environment.baseUrl}/contact/${id}`);
  }

  create(contact: Contact) {
    return this.httpClient.post<Contact>(
      `${environment.baseUrl}/contact/create`,
      contact
    );
  }

  update(contact: Contact) {
    return this.httpClient.put<Contact>(
      `${environment.baseUrl}/contact/update`,
      contact
    );
  }
}
