import { Injectable } from '@angular/core';
import { Observable, map, of, take } from 'rxjs';

import { DataMode } from '@app/shared/helpers/datamode.helper';
import { MedicalAppointmentService } from './medical-appointment.service';
import {
  MedicalAppointmentFormInput,
  MedicalAppointmentFormOutput,
} from '../entities/medical-appointment-form.interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalAppointmentFormService {
  constructor(private medicalAppointmentService: MedicalAppointmentService) {}

  buildForm(
    params: MedicalAppointmentFormInput
  ): Observable<MedicalAppointmentFormOutput> {
    const { mode, medicalAppointmentId } = params;
    let result: Observable<MedicalAppointmentFormOutput>;

    switch (mode) {
      case DataMode.create:
        result = of({ mode });
        break;
      case DataMode.edit:
      case DataMode.view:
        result = this.buildEditForm(mode, medicalAppointmentId as string);
        break;

      default:
        throw new Error(`Data mode is not recognized: ${mode}`);
    }

    return result;
  }

  buildEditForm(
    mode: DataMode,
    medicalAppointmentId: string
  ): Observable<MedicalAppointmentFormOutput> {
    return this.medicalAppointmentService.getById(medicalAppointmentId).pipe(
      take(1),
      map(
        (medicalAppointment) =>
          ({ medicalAppointment, mode } as MedicalAppointmentFormOutput)
      )
    );
  }
}
