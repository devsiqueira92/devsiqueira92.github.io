import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { first } from 'rxjs/operators';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Observable } from 'rxjs';
import { Procedure } from '@app/shared/interfaces/procedure.interface';
import { ProcedureFormService } from '../services/procedure-form.service';

export const ProcedureResolver: ResolveFn<Procedure> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    procedureService: ProcedureFormService = inject(ProcedureFormService)
  ): Observable<any> => {
    const mode = route.data.mode as DataMode;

    if (mode === DataMode.edit || mode === DataMode.view) {
      return procedureService
        .buildForm({
          procedureId: route.paramMap.get('id') as string,
          mode,
        })
        .pipe(first());
    }

    return procedureService.buildForm({ mode }).pipe(first());

  }
  
  
  