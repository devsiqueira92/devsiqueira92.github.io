import { Injectable } from '@angular/core';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Observable, map, of, take } from 'rxjs';
import { PhysioterapistFormInput, PhysioterapistFormOutput } from '../entities/physioterapists-form.interface';
import { PhysioterapistService } from './physioterapist.service';

@Injectable({
  providedIn: 'root'
})
export class PhysioterapistFormService {

  constructor(private physioterapistService: PhysioterapistService) {}

  buildForm(params: PhysioterapistFormInput): Observable<PhysioterapistFormOutput> {
    const { mode, physioterapistId } = params;
    let result: Observable<PhysioterapistFormOutput>;

    switch (mode) {
      case DataMode.create:
        result = of({ mode });
        break;
      case DataMode.edit:
      case DataMode.view:
        result = this.buildEditForm(mode, physioterapistId as string);
        break;

      default:
        throw new Error(`Data mode is not recognized: ${mode}`);
    }

    return result;
  }

  buildEditForm(
    mode: DataMode,
    physioterapistId: string
  ): Observable<PhysioterapistFormOutput> {
    return this.physioterapistService.getById(physioterapistId).pipe(
      take(1),
      map((physioterapist) => ({ physioterapist, mode } as PhysioterapistFormOutput))
    );
  }
}
