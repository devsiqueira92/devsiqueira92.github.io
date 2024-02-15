import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import {
  FormValidationStatus,
  displayWarning,
} from '@app/shared/enums/form-validation.enum';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [
    CommonModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
  ],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss',
})
export class TextAreaComponent {
  displayWarning = displayWarning;
  objectKeys = Object.keys;
  FormValidationStatus = FormValidationStatus;

  @Input() parentForm: UntypedFormGroup;
  @Input() controlName: string;
  @Input() placeholder: string;
  @Input() mask: string;
  @Input() type = 'text';
  @Input() hasFloatingLabel = true;
  @Input() forceShowFloatingLabel = false;
  @Input() warningEnabled = true;
  @Input() autocomplete = 'on';

  isSubmitting$: Observable<boolean>;
  passwordVisible = false;

  ngOnInit(): void {
    // this.isSubmitting$ =
    //   this.parentForm.controls.isSubmitting.valueChanges.pipe(
    //     startWith(false),
    //     shareReplay()
    //   );
  }

  valueChanged() {
    // if (this.parentForm.controls?.isSubmitting.value) {
    //   this.parentForm.patchValue({ isSubmitting: false });
    // }
  }
}
