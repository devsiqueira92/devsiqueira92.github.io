import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './shared/guards/is-authenticated.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'physioterapists',
    canActivate: [isAuthenticatedGuard],
    data: { authDesiredValue: true, redirect: '/' },
    loadChildren: () =>
      import('./pages/physioterapists/physioterapists.routes').then(
        (m) => m.PHYSIOTERAPISTS_ROUTES
      ),
  },
  {
    path: 'appointments',
    canActivate: [isAuthenticatedGuard],
    data: { authDesiredValue: true, redirect: '/' },
    loadChildren: () =>
      import('./pages/appointments/appointments.routes').then(
        (m) => m.APPOINTMENTS_ROUTES
      ),
  },
  {
    path: 'patients',
    canActivate: [isAuthenticatedGuard],
    data: { authDesiredValue: true, redirect: '/' },
    loadChildren: () =>
      import('./pages/patients/patients.routes').then((m) => m.PATIENTS_ROUTES),
  },
  {
    path: 'procedures',
    canActivate: [isAuthenticatedGuard],
    data: { authDesiredValue: true, redirect: '/' },
    loadChildren: () =>
      import('./pages/procedures/procedures.routes').then(
        (m) => m.PROCEDURES_ROUTES
      ),
  },

  {
    path: 'account',
    canActivate: [isAuthenticatedGuard],
    data: { authDesiredValue: true, redirect: '/' },
    loadChildren: () =>
      import('./pages/my-account/my-account.routes').then(
        (m) => m.MY_ACCOUNT_ROUTES
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.routes').then((m) => m.REGISTER_ROUTES),
  },
];