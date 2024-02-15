import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicalAppointments } from '@app/data/medical-appointments';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicalAppointmentService {
  medicalAppointments = MedicalAppointments;

  constructor(protected httpClient: HttpClient) {}

  // getList(): Observable<Result<Patient, Metadata>> {
  //   console.log('getList');
  //   return this.httpClient
  //     .get<Result<Patient, Patient>>(`${this.rootUrl}/medicalAppointments/`)
  //     .pipe(map((result: any) => result));
  // }

  getList(): Observable<any> {
    return of(this.medicalAppointments);
  }

  // getById(id: string): Observable<PatientFormOutput> {
  //   return this.httpClient.get<PatientFormOutput>(
  //     `${this.rootUrl}/medicalAppointments/${id}`
  //   );
  // }

  getById(id: string | null): Observable<any> {
    const result = this.medicalAppointments.find(
      (medicalAppointment) => medicalAppointment.id === id
    );
    return of(result);
  }

  add(medicalAppointment: any) {
    let medicalAppointmentsAdded = { medicalAppointment };
    medicalAppointmentsAdded.medicalAppointment.id = (
      this.medicalAppointments.length + 1
    ).toString();

    this.medicalAppointments.push(medicalAppointmentsAdded.medicalAppointment);
  }

  update(medicalAppointments: any) {
    const medicalAppointmentsIndex = this.medicalAppointments.findIndex(
      (_medicalAppointments) =>
        _medicalAppointments.id === medicalAppointments.id
    );
    this.medicalAppointments[medicalAppointmentsIndex] = medicalAppointments;
  }
}
