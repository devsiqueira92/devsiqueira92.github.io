import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Physioterapists } from '@app/data/physioterapists';
import { environment } from '@root/src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhysioterapistService {
  physioterapists = Physioterapists;
  rootUrl = environment.baseUrl;

  constructor(protected httpClient: HttpClient) {}

  getList(): Observable<any> {
    return this.httpClient.get<any>(`${this.rootUrl}/professional/`);
  }

  getById(id: string | null): Observable<any> {
    return this.httpClient.get<any>(`${this.rootUrl}/professional/${id}`);
  }

  add(professional: any) {
    return this.httpClient.post<any>(
      `${this.rootUrl}/professional/create`,
      professional
    );
  }

  update(professional: any) {
    return this.httpClient.put<any>(
      `${this.rootUrl}/professional/update`,
      professional
    );
  }
}
