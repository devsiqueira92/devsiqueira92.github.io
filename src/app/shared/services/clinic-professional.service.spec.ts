import { TestBed } from '@angular/core/testing';

import { ClinicProfessionalService } from './clinic-professional.service';

describe('ClinicProfessionalService', () => {
  let service: ClinicProfessionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicProfessionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
