import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PatientForm,
  PatientFormOutput,
} from '../../entities/patient-form.interface';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Patient } from '@app/shared/interfaces/patient.interface';
import { InputComponent } from '@app/shared/components/forms/input/input.component';
import { PatientService } from '../../services/patient.service';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { NgIf } from '@angular/common';
import { BackSubmitPanelComponent } from '@app/shared/components/back-submit-panel/back-submit-panel.component';
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
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.scss',
})
export class PatientDetailsComponent implements OnInit {
  mode: string;
  formGroup: FormGroup<PatientForm>;
  constructor(
    public route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const formData = this.route.snapshot.data.formData as PatientFormOutput;
    this.mode = this.route.snapshot.data.mode;
    console.log(formData);

    this.formGroup = new FormGroup<PatientForm>({
      id: new FormControl({
        value: null,
        disabled: this.mode === DataMode.edit,
      }),
      name: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      phone: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      address: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      birthDate: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
    });

    if (formData.mode === DataMode.view || formData.mode === DataMode.edit) {
      const patient = {
        ...formData.patient,
      };
      this.formGroup.patchValue({
        ...patient,
      } as Patient);
    }
  }

  submit() {
    const patient = this.formGroup.getRawValue();
    if (patient.id === null) {
      this.patientService.add(patient);
    } else {
      this.patientService.update(patient);
    }

    this.router.navigate(['/patients']);
  }

  back() {
    this.router.navigate(['/patients']);
  }
}
