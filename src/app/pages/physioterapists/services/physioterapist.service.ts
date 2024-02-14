import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Physioterapists } from '@app/data/physioterapists';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhysioterapistService {

  physioterapists = Physioterapists
  constructor(protected httpClient: HttpClient) {}
  
  // getList(): Observable<Result<Patient, Metadata>> {
  //   console.log('getList');
  //   return this.httpClient
  //     .get<Result<Patient, Patient>>(`${this.rootUrl}/physioterapist/`)
  //     .pipe(map((result: any) => result));
  // }

  getList(): Observable<any> {
    return of(this.physioterapists);
    } 

  // getById(id: string): Observable<PatientFormOutput> {
  //   return this.httpClient.get<PatientFormOutput>(
  //     `${this.rootUrl}/physioterapist/${id}`
  //   );
  // }

  getById(id: string | null): Observable<any> {
    const result = this.physioterapists.find((physioterapist) => physioterapist.id === id)
    return of(result);
  }

  add(physioterapist: any) {
    let physioterapistAdded = { physioterapist }
    physioterapistAdded.physioterapist.id = (this.physioterapists.length + 1).toString()

    this.physioterapists.push(physioterapistAdded.physioterapist)
  }

  update(physioterapist: any) {
    const physioterapistIndex = this.physioterapists.findIndex((_physioterapist) => _physioterapist.id === physioterapist.id)
    this.physioterapists[physioterapistIndex] = physioterapist
  }
}
