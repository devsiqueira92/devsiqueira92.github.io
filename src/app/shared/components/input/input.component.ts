import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { Observable, shareReplay, startWith } from 'rxjs';

import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { FormValidationStatus, displayWarning } from '@app/shared/enums/form-validation.enum';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, NzInputModule, NzIconModule, NzFormModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
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
