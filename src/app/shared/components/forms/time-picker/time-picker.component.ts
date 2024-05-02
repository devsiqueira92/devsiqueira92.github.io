import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import {
  FormValidationStatus,
  displayWarning,
} from '@app/shared/enums/form-validation.enum';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Observable, shareReplay, startWith } from 'rxjs';

@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzTimePickerModule,
  ],
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.scss',
})
export class TimePickerComponent {
  displayWarning = displayWarning;
  objectKeys = Object.keys;
  FormValidationStatus = FormValidationStatus;

  @Input() parentForm: UntypedFormGroup;
  @Input() controlName: string;
  @Input() placeholder: string;
  @Input() hasFloatingLabel = true;
  @Input() forceShowFloatingLabel = false;
  @Input() nzMode = 'default';
  @Input() step = 60;

  isSubmitting$: Observable<boolean>;

  ngOnInit(): void {
    this.isSubmitting$ =
      this.parentForm.controls.isSubmitting?.valueChanges.pipe(
        startWith(false),
        shareReplay()
      );
  }

  valueChanged() {
    if (this.parentForm.controls.isSubmitting?.value) {
      this.parentForm.patchValue({ isSubmitting: false });
    }
  }
}
