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

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    NgIf,
    BackSubmitPanelComponent,
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
    private router: Router
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
    const physioterapist = this.formGroup.getRawValue();
    if (physioterapist.id === null) {
      this.physioterapistService.add(physioterapist);
    } else {
      this.physioterapistService.update(physioterapist);
    }

    this.router.navigate(['/physioterapists']);
  }

  back() {
    this.router.navigate(['/physioterapists']);
  }
}
