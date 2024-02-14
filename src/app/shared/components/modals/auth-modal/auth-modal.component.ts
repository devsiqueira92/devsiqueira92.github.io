import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthForm, AuthStep } from '@app/shared/interfaces/auth.interface';
import { AuthenticationService } from '@app/shared/services/authentication.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { BehaviorSubject, EMPTY, catchError, tap, throwError } from 'rxjs';
import { LoginFormComponent } from '../../forms/login-form/login-form.component';
import { AsyncPipe, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [LoginFormComponent, AsyncPipe, NgSwitch, NgSwitchCase],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent {
  AuthStep = AuthStep;
  errorCode: number;
  loginInput: AuthForm;
  usernameInput: string;

  currentStep$ = new BehaviorSubject(AuthStep.Login);
  // currentScreenSize$ = this.screenService.screenSize$;

  constructor(
    private ref: ChangeDetectorRef,
    private modal: NzModalRef,
    private auth: AuthenticationService
  ) // private notificationService: NotificationService
  {}

  ngOnInit(): void {
    // combineLatest([this.currentStep$])
    //   .pipe(
    //     // eslint-disable-next-line complexity
    //     map(([entryType]) => {
    //       switch (entryType) {
    //         case AuthStep.Login:
    //           return LoginModalDesktopConfig;
    //         default:
    //           return this.modal.getConfig();
    //       }
    //     }),
    //     tap((config) => {
    //       this.modal.updateConfig(config);
    //     })
    //   )
    //   .subscribe();
  }

  onLoginInputSubmit(formGroup: FormGroup): void {
    if (!formGroup.valid) {
      // this.notificationService.error('FormValidation.InvalidForm');
      return;
    }
    const { value: formGroupValue } = formGroup;

    this.auth
      .login({
        password: formGroupValue.password,
        email: formGroupValue.email,
      })
      .pipe(
        tap(() => {
          if (formGroupValue.rememberMe && formGroupValue.username) {
            // this.auth.rememberMe(formGroupValue.username);
          }
          this.modal.close();
        }),
        catchError((error) => {
          switch (error.status) {
            case 400:
              // this block should never execute after aligning with backend validators
              this.errorCode = 400;
              this.ref.markForCheck();
              return EMPTY;
            case 401:
              this.loginInput = formGroupValue;
              // this.currentStep$.next(AuthStep.Twofa);
              return EMPTY;
            case 403:
              this.errorCode = 403;
              this.ref.markForCheck();
              return EMPTY;
            default:
              return throwError(() => error);
          }
        })
      )
      .subscribe();
  }
}
