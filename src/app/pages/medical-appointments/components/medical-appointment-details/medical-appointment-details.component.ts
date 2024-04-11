import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Scheduling } from '@app/shared/interfaces/scheduling.interface';
import { InputComponent } from '@app/shared/components/forms/input/input.component';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProcedureService } from '@app/pages/procedures/services/procedure.service';
import { Observable, map, switchMap } from 'rxjs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { TextAreaComponent } from '@app/shared/components/forms/text-area/text-area.component';
import { BackSubmitPanelComponent } from '@app/shared/components/back-submit-panel/back-submit-panel.component';
import {
  NzNotificationModule,
  NzNotificationService,
} from 'ng-zorro-antd/notification';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { SchedulingService } from '@app/pages/scheduling/services/scheduling.service';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import {
  MedicalAppointmentForm,
  MedicalAppointmentFormOutput,
} from '../../entities/medical-appointment-form.interface';
import { MedicalAppointmentService } from '../../services/medical-appointment.service';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    CommonModule,
    NzGridModule,
    NzIconModule,
    NzDrawerModule,
    TextAreaComponent,
    BackSubmitPanelComponent,
    NzNotificationModule,
    NzDividerModule,
    NzDescriptionsModule,
  ],
  templateUrl: './medical-appointment-details.component.html',
  styleUrl: './medical-appointment-details.component.scss',
})
export class MedicalAppointmentDetailsComponent {
  mode: string;
  formGroup: FormGroup<MedicalAppointmentForm>;
  procedureList$: Observable<any>;
  scheduling$: any;
  visible = false;

  constructor(
    public route: ActivatedRoute,
    private schedulingService: SchedulingService,

    private medicalAppointmentService: MedicalAppointmentService,
    private proceduresService: ProcedureService,
    private router: Router,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    const formData = this.route.snapshot.data
      .formData as MedicalAppointmentFormOutput;

    const schedulingId = this.route.snapshot.paramMap.get('id') as string;

    this.procedureList$ = this.proceduresService.getList();
    this.scheduling$ = this.schedulingService.getById(schedulingId);

    this.mode = this.route.snapshot.data.mode;

    this.formGroup = new FormGroup<MedicalAppointmentForm>({
      id: new FormControl({
        value: null,
        disabled: this.mode === DataMode.edit,
      }),

      bloodOxygenation: new FormControl({
        value: null,
        disabled: this.mode === DataMode.view,
      }),
      bloodPressure: new FormControl({
        value: null,
        disabled: this.mode === DataMode.view,
      }),
      beatsPerMinute: new FormControl({
        value: null,
        disabled: this.mode === DataMode.view,
      }),
      notes: new FormControl({
        value: null,
        disabled: this.mode === DataMode.view,
      }),
      evolution: new FormControl({
        value: null,
        disabled: this.mode === DataMode.view,
      }),
      weight: new FormControl({
        value: null,
        disabled: this.mode === DataMode.view,
      }),
      status: new FormControl({
        value: null,
        disabled: this.mode === DataMode.view,
      }),
      schedulingId: new FormControl(schedulingId),
    });

    if (formData.mode === DataMode.view || formData.mode === DataMode.edit) {
      const medicalAppointment = {
        ...formData.medicalAppointment,
      };
      this.formGroup.patchValue({
        ...medicalAppointment,
      } as Scheduling);
    }
  }

  submit() {
    let medicalAppointment = this.formGroup.getRawValue();
    if (medicalAppointment.id === null) {
      this.medicalAppointmentService
        .add(medicalAppointment)
        .pipe(
          switchMap(() =>
            this.schedulingService.finishScheduling(
              medicalAppointment.schedulingId
            )
          )
        )
        .subscribe(() => this.router.navigate(['/medical-appointments']));
    } else {
      this.medicalAppointmentService
        .update(medicalAppointment)
        .subscribe(() => this.router.navigate(['/medical-appointments']));
    }
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  selectProtocol(protocol: any): void {
    const previousSteps = this.formGroup.controls.evolution?.value;

    if (previousSteps) {
      this.formGroup.patchValue({
        evolution: `${previousSteps} \n${protocol.description}`,
      });
    } else {
      this.formGroup.patchValue({
        evolution: `${protocol.description}`,
      });
    }

    this.notification.blank(
      protocol.name,
      'Protocolo adicionado ao campo Evolução com sucesso!',
      { nzDuration: 5000, nzPlacement: 'topLeft' }
    );
  }

  back() {
    if (this.mode === 'edit') {
      this.router.navigate(['/medical-appointments']);
    } else {
      this.router.navigate(['/scheduling']);
    }
  }

  getWidthScreen() {
    return window.innerWidth < 990 ? window.innerWidth : 375;
  }
}
