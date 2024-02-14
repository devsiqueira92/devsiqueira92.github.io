import { Injectable } from '@angular/core';

import { Clinics } from '@app/data/clinic';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  clinics = Clinics
  constructor() { }


  getAccount() {
    const myAccount = this.clinics.find((clinic) => clinic.id === '1')
    return of(myAccount)
  }
}
