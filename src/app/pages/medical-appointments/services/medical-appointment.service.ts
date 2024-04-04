import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicalAppointments } from '@app/data/medical-appointments';
import { environment } from '@root/src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicalAppointmentService {
  medicalAppointments = MedicalAppointments;

  rootUrl = environment.baseUrl;

  constructor(protected httpClient: HttpClient) {}

  getList(): Observable<any> {
    return this.httpClient.get<any>(`${this.rootUrl}/medical-appointment`, {
      params: { pageSize: 100 },
    });
  }

  getPatientHistoricList(id: string): Observable<any> {
    return this.httpClient.get<any>(
      `${this.rootUrl}/medical-appointment/patient/${id}`,
      {
        params: { pageSize: 100 },
      }
    );
  }

  getById(id: string | null): Observable<any> {
    return this.httpClient.get<any>(
      `${this.rootUrl}/medical-appointment/${id}`
    );
  }

  add(medicalAppointment: any) {
    return this.httpClient.post<any>(
      `${this.rootUrl}/medical-appointment/create`,
      medicalAppointment
    );
  }

  update(medicalAppointment: any) {
    return this.httpClient.put<any>(
      `${this.rootUrl}/medical-appointment/update`,
      medicalAppointment
    );
  }
}
