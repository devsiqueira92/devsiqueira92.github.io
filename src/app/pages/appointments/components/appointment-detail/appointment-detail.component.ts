import { Component } from '@angular/core';
import { AppointmentForm, AppointmentFormOutput } from '../../entities/appointment-form.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentsService } from '../../services/appointments.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Appointment } from '@app/shared/interfaces/appointment.interface';
import { InputComponent } from '@app/shared/components/input/input.component';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProcedureService } from '@app/pages/procedures/services/procedure.service';
import { Observable } from 'rxjs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';


@Component({
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, CommonModule, NzGridModule, NzIconModule, NzDrawerModule],
  templateUrl: './appointment-detail.component.html',
  styleUrl: './appointment-detail.component.scss'
})
export class AppointmentDetailComponent {
  mode: string;
  formGroup: FormGroup<AppointmentForm>;
  procedureList$ : Observable<any>;
  visible = false;

  constructor(public route: ActivatedRoute, 
    private appointmentService: AppointmentsService, 
    private proceduresService: ProcedureService, 
    private router: Router) {}

  ngOnInit(): void {
    this.procedureList$ = this.proceduresService.getList();
    const formData = this.route.snapshot.data.formData as AppointmentFormOutput;
    this.mode = this.route.snapshot.data.mode;
    console.log(formData)
    
    this.formGroup = new FormGroup<AppointmentForm>({
      id: new FormControl({ value: null, disabled: this.mode === DataMode.edit }),
      date: new FormControl({ value: null, disabled: false }),
      notes: new FormControl({ value: null, disabled: false }),
      vitals: new FormControl({ value: null, disabled: false }),
      bloodOxygenation: new FormControl({ value: null, disabled: false }),
      bpm: new FormControl({ value: null, disabled: false }),
      patient: new FormControl({ value: null, disabled: false }),
      doctor: new FormControl({ value: null, disabled: false }),
    })


    if (formData.mode === DataMode.view || formData.mode === DataMode.edit) {
      const appointment = {
        ...formData.appointment,
      };
      this.formGroup.patchValue({
        ...appointment,
      } as Appointment);
    }
  }

  
  submit() {
    const appointment = this.formGroup.getRawValue()
    if(appointment.id === null) {
      this.appointmentService.add(appointment)
    }
    else {
      this.appointmentService.update(appointment)
    }
    
    this.router.navigate(['/appointments'])
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  selectProtocol(protocol: any): void {
    console.log(protocol)
    const previousSteps = this.formGroup.controls.notes?.value
    this.formGroup.patchValue({notes: `${previousSteps} \n${protocol.steps}`})
  }

}
