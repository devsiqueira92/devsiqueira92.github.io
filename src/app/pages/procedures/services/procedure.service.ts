import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Procedures } from '@app/data/procedures';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  procedures = Procedures
  constructor(protected httpClient: HttpClient) {}
  
  // getList(): Observable<Result<Patient, Metadata>> {
  //   console.log('getList');
  //   return this.httpClient
  //     .get<Result<Patient, Patient>>(`${this.rootUrl}/procedure/`)
  //     .pipe(map((result: any) => result));
  // }

  getList(): Observable<any> {
    return of(this.procedures);
    } 

  // getById(id: string): Observable<PatientFormOutput> {
  //   return this.httpClient.get<PatientFormOutput>(
  //     `${this.rootUrl}/procedure/${id}`
  //   );
  // }

  getById(id: string | null): Observable<any> {
    const result = this.procedures.find((procedure) => procedure.id === id)
    return of(result);
  }

  add(procedure: any) {
    let procedureAdded = { procedure }
    procedureAdded.procedure.id = (this.procedures.length + 1).toString()

    this.procedures.push(procedureAdded.procedure)
  }

  update(procedure: any) {
    const procedureIndex = this.procedures.findIndex((_procedure) => _procedure.id === procedure.id)
    this.procedures[procedureIndex] = procedure
  }
}
