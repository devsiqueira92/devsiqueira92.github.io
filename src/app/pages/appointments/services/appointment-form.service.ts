import { Injectable } from '@angular/core';
import { AppointmentsService } from './appointments.service';
import { Observable, map, of, take } from 'rxjs';
import { AppointmentFormInput, AppointmentFormOutput } from '../entities/appointment-form.interface';
import { DataMode } from '@app/shared/helpers/datamode.helper';

@Injectable({
  providedIn: 'root'
})
export class AppointmentFormService {
  constructor(private appointmentService: AppointmentsService) {}

  buildForm(params: AppointmentFormInput): Observable<AppointmentFormOutput> {
    const { mode, appointmentId } = params;
    let result: Observable<AppointmentFormOutput>;

    switch (mode) {
      case DataMode.create:
        result = of({ mode });
        break;
      case DataMode.edit:
      case DataMode.view:
        result = this.buildEditForm(mode, appointmentId as string);
        break;

      default:
        throw new Error(`Data mode is not recognized: ${mode}`);
    }

    return result;
  }

  buildEditForm(
    mode: DataMode,
    appointmentId: string
  ): Observable<AppointmentFormOutput> {
    return this.appointmentService.getById(appointmentId).pipe(
      take(1),
      map((appointment) => ({ appointment, mode } as AppointmentFormOutput))
    );
  }
}
