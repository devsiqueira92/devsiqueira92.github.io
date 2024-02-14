import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointments } from '@app/data/appointments';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  appointments = Appointments

  constructor(protected httpClient: HttpClient) {}
  
  // getList(): Observable<Result<Patient, Metadata>> {
  //   console.log('getList');
  //   return this.httpClient
  //     .get<Result<Patient, Patient>>(`${this.rootUrl}/appointment/`)
  //     .pipe(map((result: any) => result));
  // }

  getList(): Observable<any> {
    return of(this.appointments);
  } 

  // getById(id: string): Observable<PatientFormOutput> {
  //   return this.httpClient.get<PatientFormOutput>(
  //     `${this.rootUrl}/appointment/${id}`
  //   );
  // }

  getById(id: string | null): Observable<any> {
    const result = this.appointments.find((appointment) => appointment.id === id)
    return of(result);
  }

  getByDate(date: any): Observable<any> {
    const result = this.appointments.filter((appointment) => appointment.date.toISOString() === new Date(date).toISOString())
    console.log(result)
    return of(result);
  }


  add(appointment: any) {
    let appointmentAdded = { appointment }
    appointmentAdded.appointment.id = (this.appointments.length + 1).toString()

    this.appointments.push(appointmentAdded.appointment)
  }

  update(appointment: any) {
    const appointmentIndex = this.appointments.findIndex((_appointment) => _appointment.id === appointment.id)
    this.appointments[appointmentIndex] = appointment
  }
}
