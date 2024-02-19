import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { MedicalAppointmentService } from './services/medical-appointment.service';
import { SchedulingService } from '../scheduling/services/scheduling.service';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzTableModule,
    NzDividerModule,
    LinkButtonComponent,
    NzIconModule,
  ],
  templateUrl: './medical-appointments.component.html',
  styleUrl: './medical-appointments.component.scss',
})
export class MedicalAppointmentsComponent implements OnInit {
  listOfData$: Observable<any>;

  constructor(
    private medicalAppointmentService: MedicalAppointmentService,
    private schedulingService: SchedulingService
  ) {}

  ngOnInit(): void {
    this.listOfData$ = this.medicalAppointmentService.getList();
  }
}
