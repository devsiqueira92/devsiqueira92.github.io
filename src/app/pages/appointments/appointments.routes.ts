import { Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentDetailComponent } from './components/appointment-detail/appointment-detail.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { AppointmentResolver } from './resolvers/appointment.resolver';

export const APPOINTMENTS_ROUTES: Routes = [
  { 
    path: '', 
    component: AppointmentsComponent, 
    children: [
      { 
        path: 'list/:date', 
        component: AppointmentsListComponent 
      },
    ] 
  },
  { 
    path: 'edit/:id', component: AppointmentDetailComponent, 
    resolve: { formData: AppointmentResolver }, 
    data: { mode: DataMode.edit },  
  },
  { 
    path: 'create', component: AppointmentDetailComponent,
    resolve: { formData: AppointmentResolver }, 
    data: { mode: DataMode.create },   
  },
];
