import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './patient-history.component.html',
  styleUrl: './patient-history.component.scss'
})
export class PatientHistoryComponent implements OnInit {

  history$: Observable<any>
  constructor(public route: ActivatedRoute, private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    console.log(id)

    this.history$ = this.patientService.getAppointments(id)
  }
}
