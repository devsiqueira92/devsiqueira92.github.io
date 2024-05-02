import { Injectable } from '@angular/core';
import { Observable, map, of, take } from 'rxjs';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { SettingsService } from './settings.service';
import {
  SettingsFormInput,
  SettingsFormOutput,
} from '../entities/settings-form.interface';

@Injectable({
  providedIn: 'root',
})
export class SettingsFormService {
  constructor(private settingService: SettingsService) {}

  buildForm(params: SettingsFormInput): Observable<SettingsFormOutput> {
    const { mode, settingId } = params;
    let result: Observable<SettingsFormOutput>;

    switch (mode) {
      case DataMode.create:
        result = of({ mode });
        break;
      case DataMode.edit:
      case DataMode.view:
        result = this.buildEditForm(mode, settingId as string);
        break;

      default:
        throw new Error(`Data mode is not recognized: ${mode}`);
    }

    return result;
  }

  buildEditForm(
    mode: DataMode,
    settingId: string
  ): Observable<SettingsFormOutput> {
    return this.settingService.getById(settingId).pipe(
      take(1),
      map((setting) => ({ setting, mode } as SettingsFormOutput))
    );
  }
}
