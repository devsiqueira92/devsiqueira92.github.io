import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { LoginInputComponent } from '@app/shared/components/forms/login-input/login-input.component';
import { AuthForm, AuthStep } from '@app/shared/interfaces/auth.interface';
import { Login } from '@app/shared/interfaces/login.interface';
import { AuthenticationService } from '@app/shared/services/authentication.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { BehaviorSubject, EMPTY, catchError, tap, throwError } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LoginInputComponent,
    ButtonComponent,
    NzGridModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  AuthStep = AuthStep;
  errorCode: number;
  loginInput: AuthForm;
  usernameInput: string;

  currentStep$ = new BehaviorSubject(AuthStep.Login);

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
      // rememberMe: new FormControl(false),
    });
  }

  login() {
    const { value: formGroupValue } = this.formGroup;

    this.authService
      .login({
        email: formGroupValue.email,
        password: formGroupValue.password,
      })
      .pipe(
        tap(() => {
          // if (formGroupValue.rememberMe && formGroupValue.username) {
          //   // this.auth.rememberMe(formGroupValue.username);
          // }
          // this.modal.close();
        }),
        catchError((error) => {
          switch (error.status) {
            case 400:
              // this block should never execute after aligning with backend validators
              this.errorCode = 400;
              // this.ref.markForCheck();
              return EMPTY;
            case 401:
              this.loginInput = formGroupValue;
              // this.currentStep$.next(AuthStep.Twofa);
              return EMPTY;
            case 403:
              this.errorCode = 403;
              // this.ref.markForCheck();
              return EMPTY;
            default:
              return throwError(() => error);
          }
        })
      )
      .subscribe(() => this.router.navigate(['scheduling']));
  }
}
