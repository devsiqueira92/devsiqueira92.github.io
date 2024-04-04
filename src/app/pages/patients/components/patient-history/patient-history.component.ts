import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { DrawerService } from '@app/shared/services/drawer.service';
import { MedicalAppointmentService } from '@app/pages/medical-appointments/services/medical-appointment.service';
import { NzTableModule } from 'ng-zorro-antd/table';
@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzIconModule,
    LinkButtonComponent,
    NzDividerModule,
    RouterModule,
    NzGridModule,
    NzDrawerModule,
    NzTableModule,
  ],
  templateUrl: './patient-history.component.html',
  styleUrl: './patient-history.component.scss',
})
export class PatientHistoryComponent implements OnInit {
  history$: Observable<any>;
  details: any;
  visible = false;

  constructor(
    public route: ActivatedRoute,
    private patientService: PatientService,
    private medicalAppointmentService: MedicalAppointmentService,

    public drawerService: DrawerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.history$ = this.medicalAppointmentService.getPatientHistoricList(id);
  }

  open(): void {
    this.drawerService.visibleDrawer = true;
    // this.router.navigate(['/patients/1/history/detail/3']);
  }

  close(): void {
    this.drawerService.close();
  }

  getWidthScreen() {
    return window.innerWidth < 990 ? window.innerWidth : 675;
  }
}
