import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackSubmitPanelComponent } from '@app/shared/components/back-submit-panel/back-submit-panel.component';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { InputComponent } from '@app/shared/components/forms/input/input.component';
import { ClinicService } from '@app/shared/services/clinic.service';
import { ClinicForm } from '../../entites/clinic-form.interface';
import { Clinic } from '@app/shared/interfaces/clinic.interface';

@Component({
  selector: 'app-clinic',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    NgIf,
    BackSubmitPanelComponent,
  ],
  templateUrl: './clinic.component.html',
  styleUrl: './clinic.component.scss',
})
export class ClinicComponent {
  formGroup: FormGroup<ClinicForm>;
  constructor(
    public route: ActivatedRoute,
    private clinicService: ClinicService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup<ClinicForm>({
      name: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      identificationNumber: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      // address: new FormControl({ value: null, disabled: false }, [
      //   Validators.required,
      // ]),
    });
  }

  submit() {
    this.clinicService
      .registerClinic(this.formGroup.value as Clinic)
      .subscribe((r) => {
        console.log(r);
      });
  }

  back() {}
}
