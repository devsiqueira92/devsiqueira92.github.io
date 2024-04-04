import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@root/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SchedulingTypeService {
  constructor(private httpClient: HttpClient) {}

  getList() {
    return this.httpClient.get<any>(`${environment.baseUrl}/scheduling-type`);
  }

  getStatusList() {
    return this.httpClient.get<any>(`${environment.baseUrl}/status-scheduling`);
  }
}
