import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { first } from 'rxjs/operators';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Observable } from 'rxjs';
import { PhysioterapistFormService } from '../services/physioterapists-form.service';
import { Physioterapist } from '@app/shared/interfaces/physioterapist.interface';

export const PhysioterapistsResolver: ResolveFn<Physioterapist> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    physioterapistsService: PhysioterapistFormService = inject(PhysioterapistFormService)
  ): Observable<any> => {
    const mode = route.data.mode as DataMode;

    if (mode === DataMode.edit || mode === DataMode.view) {
      return physioterapistsService
        .buildForm({
          physioterapistId: route.paramMap.get('id') as string,
          mode,
        })
        .pipe(first());
    }
    return physioterapistsService.buildForm({ mode }).pipe(first());
  }
  
  
  