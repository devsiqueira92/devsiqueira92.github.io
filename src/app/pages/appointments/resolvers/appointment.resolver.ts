import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { first } from 'rxjs/operators';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Observable } from 'rxjs';
import { Appointment } from '@app/shared/interfaces/appointment.interface';
import { AppointmentFormService } from '../services/appointment-form.service';

export const AppointmentResolver: ResolveFn<Appointment> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    patientService: AppointmentFormService = inject(AppointmentFormService)
  ): Observable<any> => {
    const mode = route.data.mode as DataMode;

    if (mode === DataMode.edit || mode === DataMode.view) {
      return patientService
        .buildForm({
          appointmentId: route.paramMap.get('id') as string,
          mode,
        })
        .pipe(first());
    }

    return patientService.buildForm({ mode }).pipe(first());

  }
  
  
  