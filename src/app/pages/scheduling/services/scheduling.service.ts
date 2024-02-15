import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Scheduling } from '@app/data/scheduling';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchedulingService {
  scheduling = Scheduling;

  constructor(protected httpClient: HttpClient) {}

  // getList(): Observable<Result<Patient, Metadata>> {
  //   console.log('getList');
  //   return this.httpClient
  //     .get<Result<Patient, Patient>>(`${this.rootUrl}/scheduling/`)
  //     .pipe(map((result: any) => result));
  // }

  getList(): Observable<any> {
    return of(this.scheduling);
  }

  // getById(id: string): Observable<PatientFormOutput> {
  //   return this.httpClient.get<PatientFormOutput>(
  //     `${this.rootUrl}/scheduling/${id}`
  //   );
  // }

  getById(id: string | null): Observable<any> {
    const result = this.scheduling.find((scheduling) => scheduling.id === id);
    return of(result);
  }

  getByDate(date: any): Observable<any> {
    const result = this.scheduling.filter(
      (scheduling) =>
        scheduling.date.toISOString().substring(0, 10) ===
        new Date(date).toISOString().substring(0, 10)
    );
    return of(result);
  }

  add(scheduling: any) {
    let schedulingAdded = { scheduling };

    schedulingAdded.scheduling.patient = {
      id: '1',
      name: 'Eduardo',
      phone: '9 99898-9898',
      address: 'Rua 1',
      birthDate: '1992-03-31',
    };

    schedulingAdded.scheduling.doctor = {
      id: '3',
      name: 'João',
    };

    // schedulingAdded.scheduling.procedure = {
    //   id: '3',
    //   name: 'João',
    // };
    schedulingAdded.scheduling.id = (this.scheduling.length + 1).toString();
    schedulingAdded.scheduling.status = { id: '1', name: 'Agendado' };

    this.scheduling.push(schedulingAdded.scheduling);
  }

  update(scheduling: any) {
    const schedulingIndex = this.scheduling.findIndex(
      (_scheduling) => _scheduling.id === scheduling.id
    );
    let schedulingAdded = { scheduling };
    schedulingAdded.scheduling.patient = {
      id: '1',
      name: 'Eduardo',
      phone: '9 99898-9898',
      address: 'Rua 1',
      birthDate: '1992-03-31',
    };

    schedulingAdded.scheduling.doctor = {
      id: '3',
      name: 'João',
    };

    this.scheduling[schedulingIndex] = schedulingAdded.scheduling;
  }
}
