import { Routes } from '@angular/router';
import { ProceduresComponent } from './procedures.component';
import { ProcedureDetailsComponent } from './components/procedure-details/procedure-details.component';
import { ProcedureResolver } from './resolvers/patient.resolver';
import { DataMode } from '@app/shared/helpers/datamode.helper';

export const PROCEDURES_ROUTES: Routes = [
  { path: '', component: ProceduresComponent },

  {
    path: 'edit/:id',
    component: ProcedureDetailsComponent,
    resolve: { formData: ProcedureResolver },
    data: {
      mode: DataMode.edit,
    },
  },

  {
    path: 'create',
    component: ProcedureDetailsComponent,
    resolve: { formData: ProcedureResolver },
    data: { mode: DataMode.create },
  },
];
