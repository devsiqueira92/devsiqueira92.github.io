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
      (medicalAppointment) => medicalAppointment.schedulingId === id
    );
    return of(result);
  }

  add(medicalAppointment: any) {
    const mock: any = {
      id: medicalAppointment.id,
      schedulingId: medicalAppointment.id,
      scheduling: {
        status: {
          name: 'Finalizado',
        },
        date: '2024-02-10T18:25:43.884Z',
        doctor: {
          name: 'Geovanna',
        },
        patient: {
          name: 'Eduardo',
        },
      },
      bpm: medicalAppointment.bpm,
      bloodPressure: medicalAppointment.bloodPressure,
      evolution: medicalAppointment.evolution,
      details: medicalAppointment.details,
    };

    let medicalAppointmentsAdded = { mock };
    medicalAppointmentsAdded.mock.id = (
      this.medicalAppointments.length + 1
    ).toString();

    this.medicalAppointments.push(medicalAppointmentsAdded.mock);
  }

  update(medicalAppointments: any) {
    const mock: any = {
      id: medicalAppointments.id,
      schedulingId: medicalAppointments.id,
      scheduling: {
        status: {
          name: 'Finalizado',
        },
        date: '2024-02-10T18:25:43.884Z',
        doctor: {
          name: 'Geovanna',
        },
        patient: {
          name: 'Eduardo',
        },
      },
      bpm: medicalAppointments.bpm,
      bloodPressure: medicalAppointments.bloodPressure,
      evolution: medicalAppointments.evolution,
      details: medicalAppointments.details,
    };

    const medicalAppointmentsIndex = this.medicalAppointments.findIndex(
      (_medicalAppointments) =>
        _medicalAppointments.id === medicalAppointments.id
    );
    this.medicalAppointments[medicalAppointmentsIndex] = mock;
  }
}
