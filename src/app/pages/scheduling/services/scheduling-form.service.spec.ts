import { TestBed } from '@angular/core/testing';

import { SchedulingFormService } from './scheduling-form.service';

describe('SchedulingFormService', () => {
  let service: SchedulingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedulingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
