import { Injectable } from '@angular/core';
import { ProcedureService } from './procedure.service';
import { Observable, map, of, take } from 'rxjs';
import { ProcedureFormInput, ProcedureFormOutput } from '../entities/procedure-form.interface';
import { DataMode } from '@app/shared/helpers/datamode.helper';

@Injectable({
  providedIn: 'root'
})
export class ProcedureFormService {

  constructor(private procedureService: ProcedureService) {}

  buildForm(params: ProcedureFormInput): Observable<ProcedureFormOutput> {
    const { mode, procedureId } = params;
    let result: Observable<ProcedureFormOutput>;

    switch (mode) {
      case DataMode.create:
        result = of({ mode });
        break;
      case DataMode.edit:
      case DataMode.view:
        result = this.buildEditForm(mode, procedureId as string);
        break;

      default:
        throw new Error(`Data mode is not recognized: ${mode}`);
    }

    return result;
  }

  buildEditForm(
    mode: DataMode,
    procedureId: string
  ): Observable<ProcedureFormOutput> {
    return this.procedureService.getById(procedureId).pipe(
      take(1),
      map((procedure) => ({ procedure, mode } as ProcedureFormOutput))
    );
  }
}
