import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '@app/shared/components/forms/input/input.component';
import { SelectComponent } from '@app/shared/components/forms/select/select.component';
import { UploadComponent } from '@app/shared/components/forms/upload/upload.component';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { RegisterForm } from '@app/shared/interfaces/register-form.interface';
import { AuthenticationService } from '@app/shared/services/authentication.service';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    UploadComponent,
    LinkButtonComponent,
    SelectComponent,
    NzGridModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup<RegisterForm>;
  accountType$ = [
    {
      label: 'Profissional',
      value: '3',
    },
  ];

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup<RegisterForm>({
      email: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      password: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      confirmPassword: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      accountType: new FormControl({ value: null, disabled: false }),
    });
  }

  register() {
    this.authenticationService
      .register(this.formGroup.getRawValue() as RegisterForm)
      .subscribe(() => this.router.navigate(['/scheduling']));
  }
}
