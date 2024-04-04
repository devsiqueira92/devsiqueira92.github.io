import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@root/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClinicPatientService {
  constructor(protected httpClient: HttpClient) {}

  add(patient: any) {
    return this.httpClient.post<any>(
      `${environment.baseUrl}/clinic-patient/add-patient`,
      patient
    );
  }

  addExisting(patientId: any) {
    return this.httpClient.post<any>(
      `${environment.baseUrl}/clinic-patient/add-existing-patient`,
      { patientId: patientId.id }
    );
  }

  getList(): Observable<any> {
    return this.httpClient.get<any>(`${environment.baseUrl}/clinic-patient/`, {
      params: { pageSize: 100 },
    });
  }
}
