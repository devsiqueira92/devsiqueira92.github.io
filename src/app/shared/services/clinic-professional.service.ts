import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@root/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClinicProfessionalService {
  constructor(protected httpClient: HttpClient) {}

  getList(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.baseUrl}/clinic-professional/`
    );
  }

  getById(id: string | null): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.baseUrl}/professional/${id}`
    );
  }

  add(professional: any) {
    return this.httpClient.post<any>(
      `${environment.baseUrl}/clinic-professional/add-professional`,
      professional
    );
  }

  update(professional: any) {
    return this.httpClient.put<any>(
      `${environment.baseUrl}/professional/update`,
      professional
    );
  }
}
