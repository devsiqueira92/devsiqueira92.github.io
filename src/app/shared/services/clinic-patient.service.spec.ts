import { TestBed } from '@angular/core/testing';

import { ClinicPatientService } from './clinic-patient.service';

describe('ClinicPatientService', () => {
  let service: ClinicPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
