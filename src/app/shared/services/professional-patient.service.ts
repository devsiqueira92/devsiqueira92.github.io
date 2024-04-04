import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@root/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalPatientService {
  constructor(protected httpClient: HttpClient) {}

  add(professional: any) {
    return this.httpClient.post<any>(
      `${environment.baseUrl}/professional-patient/add-patient`,
      professional
    );
  }

  addExisting(professionalId: any) {
    return this.httpClient.post<any>(
      `${environment.baseUrl}/professional-patient/add-existing-patient`,
      { professionalId: professionalId.id }
    );
  }

  getList(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.baseUrl}/professional-patient/`,
      {
        params: { pageSize: 100 },
      }
    );
  }
}
