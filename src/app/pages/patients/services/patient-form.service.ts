
import { Injectable } from '@angular/core';
import { map, Observable, of, take } from 'rxjs';

import { DataMode } from '@app/shared/helpers/datamode.helper';
import { PatientFormInput, PatientFormOutput } from '../entities/appointment-form.interface';
import { PatientService } from './patient.service';


@Injectable({
  providedIn: 'root'
})
export class PatientFormService {
  constructor(private patientService: PatientService) {}

  buildForm(params: PatientFormInput): Observable<PatientFormOutput> {
    const { mode, patientId } = params;
    let result: Observable<PatientFormOutput>;

    switch (mode) {
      case DataMode.create:
        result = of({ mode });
        break;
      case DataMode.edit:
      case DataMode.view:
        result = this.buildEditForm(mode, patientId as string);
        break;

      default:
        throw new Error(`Data mode is not recognized: ${mode}`);
    }

    return result;
  }

  buildEditForm(
    mode: DataMode,
    patientId: string
  ): Observable<PatientFormOutput> {
    return this.patientService.getById(patientId).pipe(
      take(1),
      map((patient) => ({ patient, mode } as PatientFormOutput))
    );
  }
}
