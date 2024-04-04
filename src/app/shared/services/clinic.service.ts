import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@root/src/environments/environment';
import { Clinic } from '../interfaces/clinic.interface';
import { AuthenticationService } from './authentication.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  registerClinic(clinic: Clinic) {
    return this.http
      .post<Clinic>(`${environment.baseUrl}/clinic/create`, clinic)
      .pipe(
        tap((result: any) =>
          this.authenticationService.storeToken(result.token)
        )
      );
  }
}
