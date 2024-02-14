import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { displayWarning } from '@app/shared/enums/form-validation.enum';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { Observable, shareReplay, startWith } from 'rxjs';

@Component({
  selector: 'app-login-input',
  standalone: true,
  imports: [CommonModule, NzInputModule, NzIconModule, NzFormModule, ReactiveFormsModule],
  templateUrl: './login-input.component.html',
  styleUrl: './login-input.component.scss'
})
export class LoginInputComponent {
  displayWarning = displayWarning;
  objectKeys = Object.keys;

  @Input() control: any;
  @Input() placeholder: string;
  @Input() type = 'text';
  @Input() autocomplete = 'on';

  isSubmitting$: Observable<boolean>;

  passwordVisible = false;

  constructor() {}

  ngOnInit(): void {
    this.isSubmitting$ = this.control.valueChanges.pipe(
      startWith(false),
      shareReplay()
    );
  }
}
