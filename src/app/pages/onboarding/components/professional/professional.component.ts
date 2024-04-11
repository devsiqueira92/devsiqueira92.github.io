import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackSubmitPanelComponent } from '@app/shared/components/back-submit-panel/back-submit-panel.component';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { InputComponent } from '@app/shared/components/forms/input/input.component';
import { ProfessionalForm } from '../../entites/professional-form.interface';
import { Professional } from '@app/shared/interfaces/professional.interface';
import { ProfessionalService } from '@app/shared/services/professional.service';
import { DatePickerComponent } from '@app/shared/components/forms/date-picker/date-picker.component';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    NgIf,
    BackSubmitPanelComponent,
    DatePickerComponent,
  ],
  templateUrl: './professional.component.html',
  styleUrl: './professional.component.scss',
})
export class ProfessionalComponent {
  formGroup: FormGroup<ProfessionalForm>;
  constructor(
    public route: ActivatedRoute,
    private professionalService: ProfessionalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup<ProfessionalForm>({
      name: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      registerNumber: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      appointmentValue: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),

      birthDate: new FormControl({ value: null, disabled: false }, []),
    });
  }

  submit() {
    this.professionalService
      .registerProfessional(this.formGroup.value as Professional)
      .subscribe((r) => {
        this.router.navigate(['']);
        console.log(r);
      });
  }

  back() {}
}
