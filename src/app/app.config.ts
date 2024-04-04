import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideNzIcons } from './icons-provider';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NzModalService } from 'ng-zorro-antd/modal';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '@app-shared/services/authentication.service';
import { HttpErrorInterceptor } from './shared/services/http-error.interceptor';
import { JwtInterceptor } from './shared/services/jwt.interceptor';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNzIcons(),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter,
        },
      })
    ),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    NzModalService,
  ],
};
