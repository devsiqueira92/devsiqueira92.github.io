import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@root/src/environments/environment';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private _startTime = new BehaviorSubject<number>(0);
  private _endTime = new BehaviorSubject<number>(23);

  startTime$ = this._startTime.asObservable();
  endTime$ = this._endTime.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getWorkingTime().subscribe();
  }

  get startTime(): number {
    return this._startTime.value;
  }
  get endTime(): number {
    return this._endTime.value;
  }

  setWorkingTime(startTime: string, endTime: string) {
    this._startTime.next(parseInt(startTime));
    this._endTime.next(parseInt(endTime));
    return this.httpClient.post(`${environment.baseUrl}/settings/worktime`, {
      startTime,
      endTime,
    });
  }

  getWorkingTime() {
    return this.httpClient.get(`${environment.baseUrl}/settings`).pipe(
      map((r: any) => {
        this._startTime.next(parseInt(r.startTime));
        this._endTime.next(parseInt(r.endTime));

        return r;
      })
    );
  }

  getById(id: string) {
    return this.httpClient.get(`${environment.baseUrl}/settings`).pipe(
      map((r: any) => {
        this._startTime.next(parseInt(r.startTime));
        this._endTime.next(parseInt(r.endTime));
        const startTime = new Date();
        const endTime = new Date();

        startTime.setHours(parseInt(r.startTime));
        startTime.setMinutes(0);
        endTime.setHours(parseInt(r.endTime));
        endTime.setMinutes(0);

        r.endTime = endTime;
        r.startTime = startTime;
        return r;
      })
    );
  }
}
