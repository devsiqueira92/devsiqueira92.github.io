import { Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { OnboardingGuard } from '@app/shared/guards/onboarding.guard';

export const ONBOARDING_ROUTES: Routes = [
  {
    path: '',
    canActivate: [OnboardingGuard],
    component: OnboardingComponent,
    children: [
      {
        path: 'clinic',

        component: ClinicComponent,
      },
      {
        path: 'professional',
        component: ProfessionalComponent,
      },
    ],
  },
];
