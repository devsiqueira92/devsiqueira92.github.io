import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { first } from 'rxjs/operators';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Observable } from 'rxjs';
import { Scheduling } from '@app/shared/interfaces/scheduling.interface';
import { SchedulingFormService } from '../services/scheduling-form.service';

export const SchedulingResolver: ResolveFn<Scheduling> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  patientService: SchedulingFormService = inject(SchedulingFormService)
): Observable<any> => {
  const mode = route.data.mode as DataMode;

  if (mode === DataMode.edit || mode === DataMode.view) {
    return patientService
      .buildForm({
        schedulingId: route.paramMap.get('id') as string,
        mode,
      })
      .pipe(first());
  }

  return patientService.buildForm({ mode }).pipe(first());
};
