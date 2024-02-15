import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import {
  FormValidationStatus,
  displayWarning,
} from '@app/shared/enums/form-validation.enum';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Observable, shareReplay, startWith } from 'rxjs';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    NzDatePickerModule,
    CommonModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
  ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent {
  displayWarning = displayWarning;
  objectKeys = Object.keys;
  FormValidationStatus = FormValidationStatus;

  @Input() parentForm: UntypedFormGroup;
  @Input() controlName: string;
  @Input() placeholder: string;
  @Input() hasFloatingLabel = true;
  @Input() forceShowFloatingLabel = false;
  @Input() nzMode = 'default';

  isSubmitting$: Observable<boolean>;
  time = new Date();
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
