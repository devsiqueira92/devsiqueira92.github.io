import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentDateService {
  date$: BehaviorSubject<Date>;
  date: Date;
  constructor() {}

  setDate(date: Date) {
    this.date = date;
  }

  getDate() {
    return this.date;
  }
}
