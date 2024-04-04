import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../interfaces/address.interface';
import { Observable } from 'rxjs';
import { environment } from '@root/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private httpClient: HttpClient) {}

  getById(id: string | null): Observable<Address> {
    return this.httpClient.get<Address>(`${environment.baseUrl}/address/${id}`);
  }
}
