import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PatientFormOutput } from '../entities/patient-form.interface';
import { Patients } from '@app/data/patients';
import { Scheduling } from '@app/data/scheduling';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  patients = Patients;
  scheduling = Scheduling;

  constructor(protected httpClient: HttpClient) {}

  // getList(): Observable<Result<Patient, Metadata>> {
  //   console.log('getList');
  //   return this.httpClient
  //     .get<Result<Patient, Patient>>(`${this.rootUrl}/patient/`)
  //     .pipe(map((result: any) => result));
  // }

  getList(): Observable<any> {
    return of(this.patients);
  }

  // getById(id: string): Observable<PatientFormOutput> {
  //   return this.httpClient.get<PatientFormOutput>(
  //     `${this.rootUrl}/patient/${id}`
  //   );
  // }

  getById(id: string | null): Observable<any> {
    const result = this.patients.find((patient) => patient.id === id);
    return of(result);
  }

  getScheduling(id: string | null): Observable<any> {
    const result = this.scheduling.filter(
      (scheduling) => scheduling.patient.id === id
    );
    return of(result);
  }

  add(patient: any) {
    let patientAdded = { patient };
    patientAdded.patient.id = (this.patients.length + 1).toString();

    this.patients.push(patientAdded.patient);
  }

  update(patient: any) {
    const patientIndex = this.patients.findIndex(
      (_patient) => _patient.id === patient.id
    );
    this.patients[patientIndex] = patient;
  }
}
