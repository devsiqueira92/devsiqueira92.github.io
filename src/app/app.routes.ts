import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { RoleGuard } from './shared/guards/role.guard';
import { RolesEnum } from './shared/enums/roles.enum';
import { AccountTypeGuard } from './shared/guards/account-type.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },

  {
    path: 'onboarding',
    canActivate: [isAuthenticatedGuard],
    data: {
      authDesiredValue: true,
      redirect: '/scheduling',
    },
    loadChildren: () =>
      import('./pages/onboarding/onboarding.routes').then(
        (m) => m.ONBOARDING_ROUTES
      ),
  },
  {
    path: 'physioterapists',
    canActivate: [isAuthenticatedGuard, RoleGuard],
    data: {
      authDesiredValue: true,
      redirect: '/scheduling',
      roles: [RolesEnum.Clinic],
    },
    loadChildren: () =>
      import('./pages/physioterapists/physioterapists.routes').then(
        (m) => m.PHYSIOTERAPISTS_ROUTES
      ),
  },
  {
    path: 'scheduling',
    canActivate: [isAuthenticatedGuard, AccountTypeGuard],
    data: { authDesiredValue: true, redirect: '/scheduling' },
    loadChildren: () =>
      import('./pages/scheduling/scheduling.routes').then(
        (m) => m.APPOINTMENTS_ROUTES
      ),
  },
  {
    path: 'patients',
    canActivate: [isAuthenticatedGuard],
    data: { authDesiredValue: true, redirect: '/scheduling' },
    loadChildren: () =>
      import('./pages/patients/patients.routes').then((m) => m.PATIENTS_ROUTES),
  },
  {
    path: 'procedures',
    canActivate: [isAuthenticatedGuard, RoleGuard],
    data: {
      authDesiredValue: true,
      redirect: '/scheduling',
      roles: [RolesEnum.Professional, RolesEnum.Clinic],
    },
    loadChildren: () =>
      import('./pages/procedures/procedures.routes').then(
        (m) => m.PROCEDURES_ROUTES
      ),
  },

  {
    path: 'account',
    canActivate: [isAuthenticatedGuard],
    data: { authDesiredValue: true, redirect: '/scheduling' },
    loadChildren: () =>
      import('./pages/my-account/my-account.routes').then(
        (m) => m.MY_ACCOUNT_ROUTES
      ),
  },

  {
    path: 'medical-appointments',
    canActivate: [AccountTypeGuard],
    data: {
      authDesiredValue: true,
      redirect: '/scheduling',
    },
    loadChildren: () =>
      import('./pages/medical-appointments/medical-appointments.routes').then(
        (m) => m.MEDICAL_APPOINTMENTS_ROUTES
      ),
  },
];
