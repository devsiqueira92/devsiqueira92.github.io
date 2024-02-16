import { Component } from '@angular/core';
import {
  SchedulingForm,
  SchedulingFormOutput,
} from '../../entities/scheduling-form.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedulingService } from '../../services/scheduling.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Scheduling } from '@app/shared/interfaces/scheduling.interface';
import { InputComponent } from '@app/shared/components/forms/input/input.component';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProcedureService } from '@app/pages/procedures/services/procedure.service';
import { Observable, map } from 'rxjs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { TextAreaComponent } from '@app/shared/components/forms/text-area/text-area.component';
import { PhysioterapistService } from '@app/pages/physioterapists/services/physioterapist.service';
import { PatientService } from '@app/pages/patients/services/patient.service';
import { SelectComponent } from '@app/shared/components/forms/select/select.component';
import { SwitchComponent } from '@app/shared/components/forms/switch/switch.component';
import { DatePickerComponent } from '@app/shared/components/forms/date-picker/date-picker.component';
import { TimePickerComponent } from '@app/shared/components/forms/time-picker/time-picker.component';
import { BackSubmitPanelComponent } from '@app/shared/components/back-submit-panel/back-submit-panel.component';
import {
  NzNotificationModule,
  NzNotificationService,
} from 'ng-zorro-antd/notification';
import { NzDividerModule } from 'ng-zorro-antd/divider';

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
    SelectComponent,
    SwitchComponent,
    DatePickerComponent,
    TimePickerComponent,
    BackSubmitPanelComponent,
    NzNotificationModule,
    NzDividerModule,
  ],
  templateUrl: './scheduling-detail.component.html',
  styleUrl: './scheduling-detail.component.scss',
})
export class SchedulingDetailComponent {
  mode: string;
  formGroup: FormGroup<SchedulingForm>;
  procedureList$: Observable<any>;
  patientList$: Observable<any>;
  physioterapistList$: Observable<any>;
  visible = false;
  isSchedulingFinished = false;
  constructor(
    public route: ActivatedRoute,
    private schedulingService: SchedulingService,
    private proceduresService: ProcedureService,
    private patientService: PatientService,
    private physioterapistService: PhysioterapistService,
    private router: Router,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.procedureList$ = this.proceduresService.getList();

    this.patientList$ = this.patientService.getList().pipe(
      map((r: any) =>
        r.map((element: any) => ({
          label: element.name,
          value: element.id,
        }))
      )
    );

    this.physioterapistList$ = this.physioterapistService.getList().pipe(
      map((r: any) =>
        r.map((element: any) => ({
          label: element.name,
          value: element.id,
        }))
      )
    );

    const formData = this.route.snapshot.data.formData as SchedulingFormOutput;
    this.mode = this.route.snapshot.data.mode;

    this.formGroup = new FormGroup<SchedulingForm>({
      id: new FormControl({
        value: null,
        disabled: this.mode === DataMode.edit,
      }),
      date: new FormControl(
        { value: null, disabled: this.mode === DataMode.view },
        Validators.required
      ),
      time: new FormControl(
        { value: null, disabled: this.mode === DataMode.view },
        Validators.required
      ),
      patient: new FormControl(
        { value: null, disabled: this.mode === DataMode.view },
        Validators.required
      ),

      doctor: new FormControl(
        { value: null, disabled: this.mode === DataMode.view },
        Validators.required
      ),
      notes: new FormControl(null),
      vitals: new FormControl(null),
      bloodOxygenation: new FormControl(null),
      bpm: new FormControl(null),

      status: new FormControl(false),
    });

    if (formData.mode === DataMode.view || formData.mode === DataMode.edit) {
      const scheduling = {
        ...formData.scheduling,
      };
      this.formGroup.patchValue({
        ...scheduling,
      } as Scheduling);
    }
  }

  editAppointment() {
    let scheduling = this.formGroup.getRawValue();

    const hour = scheduling.time?.getHours() as number;
    const minute = scheduling.time?.getMinutes();
    const timestamp = scheduling.date?.setHours(hour, minute, 0, 0) as number;
    scheduling.date = new Date(timestamp);

    console.log(scheduling);

    if (scheduling.id === null) {
      this.schedulingService.add(scheduling);
    } else {
      this.schedulingService.update(scheduling);
    }

    this.router.navigate(['/scheduling']);
  }

  endAppointment() {
    this.formGroup.patchValue({ status: true });
    let scheduling = this.formGroup.getRawValue();
    console.log(scheduling);
    if (scheduling.id === null) {
      this.schedulingService.add(scheduling);
    } else {
      this.schedulingService.update(scheduling);
    }

    this.router.navigate(['/scheduling']);
  }

  finishScheduling(event: any) {
    this.isSchedulingFinished = event;
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  selectProtocol(protocol: any): void {
    const previousSteps = this.formGroup.controls.notes?.value;

    if (previousSteps) {
      this.formGroup.patchValue({
        notes: `${previousSteps} \n${protocol.steps}`,
      });
    } else {
      this.formGroup.patchValue({
        notes: `${protocol.steps}`,
      });
    }

    this.notification.blank(
      protocol.name,
      'Protocolo adicionado ao campo Evolução com sucesso!',
      { nzDuration: 5000 }
    );
  }

  back() {
    this.router.navigate(['scheduling']);
  }

  getWidthScreen() {
    return window.innerWidth < 990 ? window.innerWidth : 375;
  }
}
