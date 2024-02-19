import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { first } from 'rxjs/operators';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Observable } from 'rxjs';
import { MedicalAppointmentFormService } from '../services/medical-appointment-form.service';
import { MedicalAppointment } from '@app/shared/interfaces/medical-appointment.interface';

export const MedicalAppointmentsResolver: ResolveFn<MedicalAppointment> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  patientService: MedicalAppointmentFormService = inject(
    MedicalAppointmentFormService
  )
): Observable<any> => {
  const mode = route.data.mode as DataMode;

  if (mode === DataMode.edit || mode === DataMode.view) {
    return patientService
      .buildForm({
        medicalAppointmentId: route.paramMap.get('id') as string,
        mode,
      })
      .pipe(first());
  }

  return patientService.buildForm({ mode }).pipe(first());
};
