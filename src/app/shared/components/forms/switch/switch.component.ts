import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import {
  FormValidationStatus,
  displayWarning,
} from '@app/shared/enums/form-validation.enum';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { Observable, shareReplay, startWith } from 'rxjs';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzSwitchModule,
  ],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
})
export class SwitchComponent {
  displayWarning = displayWarning;
  objectKeys = Object.keys;
  FormValidationStatus = FormValidationStatus;

  @Input() parentForm: UntypedFormGroup;
  @Input() controlName: string;
  @Input() checkedText: string;
  @Input() UncheckedText: string;

  @Output() onStatusChange = new EventEmitter<boolean>();

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

  statusChange(event: any) {
    this.onStatusChange.emit(event);
  }
}
