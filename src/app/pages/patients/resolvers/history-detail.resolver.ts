import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { first } from 'rxjs/operators';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Observable } from 'rxjs';
import { Patient } from '@app/shared/interfaces/patient.interface';
import { PatientFormService } from '../services/patient-form.service';

export const HistoryDetailResolver: ResolveFn<Patient> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  patientService: PatientFormService = inject(PatientFormService)
): Observable<any> => {
  const mode = route.data.mode as DataMode;

  if (mode === DataMode.edit || mode === DataMode.view) {
    return patientService
      .buildForm({
        patientId: route.paramMap.get('id') as string,
        mode,
      })
      .pipe(first());
  }

  return patientService.buildForm({ mode }).pipe(first());
};
