import { Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { PatientResolver } from './resolvers/patient.resolver';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';

export const PATIENTS_ROUTES: Routes = [
  { 
    path: '', 
    component: PatientsComponent,
  },
  { 
    path: 'edit/:id', 
    component: PatientDetailsComponent, 
    resolve: { formData: PatientResolver }, 
    data: { mode: DataMode.edit }, 
  },

  { 
    path: 'create', 
    component: PatientDetailsComponent, 
    resolve: { formData: PatientResolver }, 
    data: { mode: DataMode.create }, 
  },

  { 
    path: 'history/:id', 
    component: PatientHistoryComponent, 
  },
];
