import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '@app/shared/components/forms/input/input.component';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { UploadComponent } from '@app/shared/components/forms/upload/upload.component';
import { RegisterForm } from '@app/shared/interfaces/register-form.interface';
import { AuthenticationService } from '@app/shared/services/authentication.service';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    UploadComponent,
    LinkButtonComponent,
    NzGridModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup<RegisterForm>;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup<RegisterForm>({
      name: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      address: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      phone: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      identificationNumber: new FormControl({ value: null, disabled: false }),
    });
  }

  register() {
    this.authenticationService
      .register(this.formGroup.getRawValue() as RegisterForm)
      .subscribe(() => this.router.navigate(['/home']));
  }
}
