import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';

@Component({
  standalone: true,
  imports: [CommonModule, NzIconModule, LinkButtonComponent],
  templateUrl: './patient-history.component.html',
  styleUrl: './patient-history.component.scss',
})
export class PatientHistoryComponent implements OnInit {
  history$: Observable<any>;
  constructor(
    public route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.history$ = this.patientService.getScheduling(id);
  }
}
