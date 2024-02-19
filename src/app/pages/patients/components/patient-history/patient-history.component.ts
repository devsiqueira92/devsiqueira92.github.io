import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzIconModule,
    LinkButtonComponent,
    NzDividerModule,
    RouterModule,
    NzGridModule,
  ],
  templateUrl: './patient-history.component.html',
  styleUrl: './patient-history.component.scss',
})
export class PatientHistoryComponent implements OnInit {
  history$: Observable<any>;
  constructor(
    public route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.history$ = this.patientService.getScheduling(id);
  }

  checkAppointmentDetails(schedulingId: any) {
    this.router.navigate(['medical-appointments/edit', schedulingId]);
  }
}
