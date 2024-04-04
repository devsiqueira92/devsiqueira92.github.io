import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalAppointmentService } from '@app/pages/medical-appointments/services/medical-appointment.service';
import { Observable, delay } from 'rxjs';

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { LoadingComponent } from '@app/shared/components/loading/loading.component';
import { DrawerService } from '@app/shared/services/drawer.service';
import { ButtonComponent } from '@app/shared/components/button/button.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzDescriptionsModule,
    ButtonComponent,
    LoadingComponent,
  ],
  templateUrl: './history-detail.component.html',
  styleUrl: './history-detail.component.scss',
})
export class HistoryDetailComponent implements OnInit {
  appointmentDetails$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private medicalAppointmentService: MedicalAppointmentService,
    private drawerService: DrawerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.appointmentDetails$ = this.medicalAppointmentService
        .getById(param.id)
        .pipe(delay(700));
    });
  }

  close() {
    this.drawerService.close();
  }
}
