import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { InputComponent } from '@app/shared/components/forms/input/input.component';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import {
  PhysioterapistForm,
  PhysioterapistFormOutput,
} from '../../entities/physioterapists-form.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Physioterapist } from '@app/shared/interfaces/physioterapist.interface';
import { PhysioterapistService } from '../../services/physioterapist.service';
import { BackSubmitPanelComponent } from '@app/shared/components/back-submit-panel/back-submit-panel.component';
import { DatePickerComponent } from '@app/shared/components/forms/date-picker/date-picker.component';
import { ClinicProfessionalService } from '@app/shared/services/clinic-professional.service';

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
  templateUrl: './physioterapist-details.component.html',
  styleUrl: './physioterapist-details.component.scss',
})
export class PhysioterapistDetailsComponent {
  mode: string;
  formGroup: FormGroup<PhysioterapistForm>;
  constructor(
    public route: ActivatedRoute,
    private physioterapistService: PhysioterapistService,
    private router: Router,
    private clinicProfessionalService: ClinicProfessionalService
  ) {}

  ngOnInit(): void {
    const formData = this.route.snapshot.data
      .formData as PhysioterapistFormOutput;
    this.mode = this.route.snapshot.data.mode;
    console.log(formData);

    this.formGroup = new FormGroup<PhysioterapistForm>({
      id: new FormControl({
        value: null,
        disabled: this.mode === DataMode.edit,
      }),
      name: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),

      contact: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),

      birthDate: new FormControl({ value: null, disabled: false }),

      registerNumber: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),

      appointmentValue: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
    });

    if (formData.mode === DataMode.view || formData.mode === DataMode.edit) {
      const physioterapist = {
        ...formData.physioterapist,
      };
      this.formGroup.patchValue({
        ...physioterapist,
      } as Physioterapist);
    }
  }

  submit() {
    const professional = this.formGroup.getRawValue();
    const stringDate: any = professional.birthDate;
    professional.birthDate = new Date(stringDate)
      .toISOString()
      .substring(0, 10);

    if (professional.id === null) {
      this.clinicProfessionalService
        .add(professional)
        .subscribe(() => this.router.navigate(['/physioterapists']));
    } else {
      this.physioterapistService
        .update(professional)
        .subscribe(() => this.router.navigate(['/physioterapists']));
    }
  }

  back() {
    this.router.navigate(['/physioterapists']);
  }
}
