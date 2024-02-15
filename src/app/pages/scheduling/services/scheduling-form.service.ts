import { Injectable } from '@angular/core';
import { SchedulingService } from './scheduling.service';
import { Observable, map, of, take } from 'rxjs';
import {
  SchedulingFormInput,
  SchedulingFormOutput,
} from '../entities/scheduling-form.interface';
import { DataMode } from '@app/shared/helpers/datamode.helper';

@Injectable({
  providedIn: 'root',
})
export class SchedulingFormService {
  constructor(private schedulingService: SchedulingService) {}

  buildForm(params: SchedulingFormInput): Observable<SchedulingFormOutput> {
    const { mode, schedulingId } = params;
    let result: Observable<SchedulingFormOutput>;

    switch (mode) {
      case DataMode.create:
        result = of({ mode });
        break;
      case DataMode.edit:
      case DataMode.view:
        result = this.buildEditForm(mode, schedulingId as string);
        break;

      default:
        throw new Error(`Data mode is not recognized: ${mode}`);
    }

    return result;
  }

  buildEditForm(
    mode: DataMode,
    schedulingId: string
  ): Observable<SchedulingFormOutput> {
    return this.schedulingService.getById(schedulingId).pipe(
      take(1),
      map((scheduling) => ({ scheduling, mode } as SchedulingFormOutput))
    );
  }
}
