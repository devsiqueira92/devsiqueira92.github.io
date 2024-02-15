import { Routes } from '@angular/router';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { MedicalAppointmentsComponent } from './medical-appointments.component';
import { MedicalAppointmentDetailsComponent } from './components/medical-appointment-details/medical-appointment-details.component';

export const MEDICAL_APPOINTMENTS_ROUTES: Routes = [
  {
    path: '',
    component: MedicalAppointmentsComponent,
  },

  {
    path: 'edit/:id',
    component: MedicalAppointmentDetailsComponent,
    // resolve: { formData: PatientResolver },
    // data: { mode: DataMode.create },
  },

  // {
  //   path: 'history/:id',
  //   component: PatientHistoryComponent,
  // },
];
