import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Professional } from '../interfaces/professional.interface';
import { environment } from '@root/src/environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  registerProfessional(clinic: Professional) {
    return this.http
      .post<Professional>(`${environment.baseUrl}/professional/create`, clinic)
      .pipe(
        tap((result: any) =>
          this.authenticationService.storeToken(result.token)
        )
      );
  }
}
