import { Routes } from '@angular/router';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { SettingsComponent } from './settings.component';
import { SettingsResolver } from './resolvers/settings.resolver';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    component: SettingsComponent,
    resolve: { formData: SettingsResolver },
    data: {
      mode: DataMode.edit,
    },
  },
];
