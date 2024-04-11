import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SearchService } from '@app/shared/services/search.service';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { PatientService } from '../../services/patient.service';
import { ClinicPatientService } from '@app/shared/services/clinic-patient.service';
import { Patient } from '@app/shared/interfaces/patient.interface';

@Component({
  standalone: true,
  imports: [CommonModule, NzDescriptionsModule],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss',
})
export class SearchResultComponent implements OnInit {
  searchResult$: Observable<any>;

  constructor(
    private searchService: SearchService,
    private clinicPatientService: ClinicPatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchResult$ = this.searchService
      .getResult()
      .pipe(
        tap((d) =>
          d === null ? this.router.navigate(['/patients/search']) : d
        )
      );
  }

  addToClinic(result: string) {
    this.clinicPatientService.addExisting(result).subscribe();
  }
}
