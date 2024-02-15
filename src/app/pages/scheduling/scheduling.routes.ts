import { Routes } from '@angular/router';
import { SchedulingComponent } from './scheduling.component';
import { SchedulingDetailComponent } from './components/scheduling-detail/scheduling-detail.component';
import { SchedulingListComponent } from './components/scheduling-list/scheduling-list.component';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { SchedulingResolver } from './resolvers/scheduling.resolver';

export const APPOINTMENTS_ROUTES: Routes = [
  {
    path: '',
    component: SchedulingComponent,
    children: [
      {
        path: 'list/:date',
        component: SchedulingListComponent,
      },
    ],
  },
  {
    path: 'edit/:id',
    component: SchedulingDetailComponent,
    resolve: { formData: SchedulingResolver },
    data: { mode: DataMode.edit },
  },
  {
    path: 'appointment/:id',
    component: SchedulingDetailComponent,
    resolve: { formData: SchedulingResolver },
    data: { mode: DataMode.view },
  },
  {
    path: 'create',
    component: SchedulingDetailComponent,
    resolve: { formData: SchedulingResolver },
    data: { mode: DataMode.create },
  },
];
