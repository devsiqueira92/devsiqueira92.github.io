import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { first } from 'rxjs/operators';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Observable } from 'rxjs';
import { SettingsFormService } from '../services/procedure-form.service';
import { Settings } from '@app/shared/interfaces/settings.interface';

export const SettingsResolver: ResolveFn<Settings> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  procedureService: SettingsFormService = inject(SettingsFormService)
): Observable<any> => {
  const mode = route.data.mode as DataMode;

  if (mode === DataMode.edit || mode === DataMode.view) {
    return procedureService
      .buildForm({
        settingId: route.paramMap.get('id') as string,
        mode,
      })
      .pipe(first());
  }

  return procedureService.buildForm({ mode }).pipe(first());
};
