import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginInputComponent } from '../login-input/login-input.component';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { Login } from '@app/shared/interfaces/login.interface';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, LoginInputComponent, ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Output() forgotPasswordButtonClick = new EventEmitter<void>();
  @Output() loginInputSubmit = new EventEmitter<FormGroup>();
  @Output() registerButtonClick = new EventEmitter<void>();

  formGroup: FormGroup<Login>;

  ngOnInit(): void {
    this.formGroup = new FormGroup<Login>({
      email: new FormControl(null),
      password: new FormControl(null),
      // rememberMe: new FormControl(false),
    });
  }
}
