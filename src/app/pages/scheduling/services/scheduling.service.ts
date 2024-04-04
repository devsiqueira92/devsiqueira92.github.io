import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Scheduling } from '@app/data/scheduling';
import { environment } from '@root/src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchedulingService {
  scheduling = Scheduling;
  rootUrl = environment.baseUrl;

  constructor(protected httpClient: HttpClient) {}

  getEventsFromMonthYear(month: number, year: number): Observable<any> {
    return this.httpClient.get<any>(`${this.rootUrl}/scheduling/agenda`, {
      params: { month: month, year: year },
    });
  }

  getById(id: string | null): Observable<any> {
    return this.httpClient.get<any>(`${this.rootUrl}/scheduling/${id}`);
  }

  getByDate(date: any): Observable<any> {
    console.log(date);
    return this.httpClient.get<any>(
      `${this.rootUrl}/scheduling/by-date/${date}`,
      {
        params: { date: date },
      }
    );
  }

  add(scheduling: any) {
    return this.httpClient.post<any>(
      `${this.rootUrl}/scheduling/create`,
      scheduling
    );
  }

  update(scheduling: any) {
    return this.httpClient.put<any>(
      `${this.rootUrl}/scheduling/update`,
      scheduling
    );
  }

  finishScheduling(scheduling: any) {
    debugger;
    return this.httpClient.put<any>(
      `${this.rootUrl}/scheduling/finished-status/${scheduling}`,
      scheduling
    );
  }
}
