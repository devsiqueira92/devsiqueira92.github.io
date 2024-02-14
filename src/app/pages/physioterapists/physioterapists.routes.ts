import { Routes } from '@angular/router';
import { PhysioterapistsComponent } from './physioterapists.component';
import { PhysioterapistDetailsComponent } from './components/physioterapist-details/physioterapist-details.component';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { PhysioterapistsResolver } from './resolvers/physioterapists.resolver';

export const PHYSIOTERAPISTS_ROUTES: Routes = [
  { path: '', component: PhysioterapistsComponent },
  { 
    path: 'edit/:id', 
    component: PhysioterapistDetailsComponent, 
    resolve: { formData: PhysioterapistsResolver }, 
    data: { mode: DataMode.edit }, 
  },

  { 
    path: 'create', 
    component: PhysioterapistDetailsComponent, 
    resolve: { formData: PhysioterapistsResolver }, 
    data: { mode: DataMode.create }, 
  },
];
