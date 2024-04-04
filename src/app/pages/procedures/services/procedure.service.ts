import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Procedures } from '@app/data/procedures';
import { environment } from '@root/src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProcedureService {
  procedures = Procedures;
  rootUrl = environment.baseUrl;

  constructor(protected httpClient: HttpClient) {}

  getList(): Observable<any> {
    return this.httpClient.get<any>(`${this.rootUrl}/protocol/`, {
      params: { pageSize: 100 },
    });
  }

  getById(id: string | null): Observable<any> {
    return this.httpClient.get<any>(`${this.rootUrl}/protocol/${id}`);
  }

  add(protocol: any) {
    return this.httpClient.post<any>(
      `${this.rootUrl}/protocol/create`,
      protocol
    );
  }

  update(protocol: any) {
    return this.httpClient.put<any>(
      `${this.rootUrl}/protocol/update`,
      protocol
    );
  }
}
