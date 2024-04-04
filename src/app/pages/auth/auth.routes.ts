import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { isAuthenticatedGuard } from '@app/shared/guards/is-authenticated.guard';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    canActivate: [isAuthenticatedGuard],
    data: {
      authDesiredValue: false,
      redirect: `/scheduling`,
    },
    component: AuthComponent,
    children: [
      {
        path: '',

        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];
