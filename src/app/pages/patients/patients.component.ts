import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';
import { PatientService } from './services/patient.service';
import { Observable, tap } from 'rxjs';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ClinicPatientService } from '@app/shared/services/clinic-patient.service';

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
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent {
  listOfData$: Observable<any>;

  constructor(private patientsService: PatientService) {}

  ngOnInit(): void {
    this.listOfData$ = this.patientsService.getList();
  }

  asDate(date: any) {
    return new Date(date);
  }
}
