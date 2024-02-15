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
import {
  ProcedureForm,
  ProcedureFormOutput,
} from '../../entities/procedure-form.interface';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProcedureService } from '../../services/procedure.service';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Procedure } from '@app/shared/interfaces/procedure.interface';
import { BackSubmitPanelComponent } from '@app/shared/components/back-submit-panel/back-submit-panel.component';

@Component({
  selector: 'app-procedure-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    NgIf,
    BackSubmitPanelComponent,
  ],
  templateUrl: './procedure-details.component.html',
  styleUrl: './procedure-details.component.scss',
})
export class ProcedureDetailsComponent {
  mode: string;
  formGroup: FormGroup<ProcedureForm>;
  constructor(
    public route: ActivatedRoute,
    private procedureService: ProcedureService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const formData = this.route.snapshot.data.formData as ProcedureFormOutput;
    this.mode = this.route.snapshot.data.mode;
    console.log(formData);

    this.formGroup = new FormGroup<ProcedureForm>({
      id: new FormControl({
        value: null,
        disabled: this.mode === DataMode.edit,
      }),
      name: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      steps: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      member: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
    });

    if (formData.mode === DataMode.view || formData.mode === DataMode.edit) {
      const procedure = {
        ...formData.procedure,
      };
      this.formGroup.patchValue({
        ...procedure,
      } as Procedure);
    }
  }

  submit() {
    const procedure = this.formGroup.getRawValue();
    if (procedure.id === null) {
      this.procedureService.add(procedure);
    } else {
      this.procedureService.update(procedure);
    }

    this.router.navigate(['/procedures']);
  }

  back() {
    this.router.navigate(['/procedures']);
  }
}
