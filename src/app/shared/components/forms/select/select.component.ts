import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import {
  FormValidationStatus,
  displayWarning,
} from '@app/shared/enums/form-validation.enum';
import { Observable, shareReplay, startWith } from 'rxjs';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    NzSelectModule,
    CommonModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  displayWarning = displayWarning;
  objectKeys = Object.keys;
  FormValidationStatus = FormValidationStatus;

  @Input() parentForm: UntypedFormGroup;
  @Input() controlName: string;
  @Input() placeholder: string;
  @Input() options: any[];
  @Input() hasFloatingLabel = true;
  @Input() forceShowFloatingLabel = false;
  @Input() nzMode = 'default';

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
