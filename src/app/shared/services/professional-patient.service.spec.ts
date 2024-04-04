import { TestBed } from '@angular/core/testing';

import { ProfessionalPatientService } from './professional-patient.service';

describe('ProfessionalPatientService', () => {
  let service: ProfessionalPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
