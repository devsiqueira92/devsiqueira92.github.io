import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentDateService {
  constructor() {}

  setDate(date: Date) {
    sessionStorage.setItem('schedulingDate', date.toString());
  }

  getDate() {
    const date: any = sessionStorage.getItem('schedulingDate');
    return new Date(date);
  }
}
