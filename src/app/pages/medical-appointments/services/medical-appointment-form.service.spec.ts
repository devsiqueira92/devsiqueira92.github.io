import { TestBed } from '@angular/core/testing';

import { MedicalAppointmentFormService } from './medical-appointment-form.service';

describe('MedicalAppointmentFormService', () => {
  let service: MedicalAppointmentFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalAppointmentFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
