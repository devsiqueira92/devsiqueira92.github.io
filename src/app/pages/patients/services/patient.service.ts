import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Scheduling } from '@app/data/scheduling';
import { environment } from '@root/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  scheduling = Scheduling;
  rootUrl = environment.baseUrl;

  constructor(protected httpClient: HttpClient) {}

  getList(): Observable<any> {
    return this.httpClient.get<any>(`${this.rootUrl}/patient/`, {
      params: { pageSize: 100 },
    });
  }

  getById(id: string | null): Observable<any> {
    return this.httpClient.get<any>(`${this.rootUrl}/patient/${id}`);
  }

  getByDocument(id: string | null): Observable<any> {
    return this.httpClient.get<any>(`${this.rootUrl}/patient/search/${id}`);
  }

  getScheduling(id: string | null): Observable<any> {
    const result = this.scheduling.filter(
      (scheduling) => scheduling.patient.id === id
    );
    return of(result);
  }

  add(patient: any) {
    return this.httpClient.post<any>(`${this.rootUrl}/patient/create`, patient);
  }

  update(patient: any) {
    return this.httpClient.put<any>(`${this.rootUrl}/patient/update`, patient);
  }
}
