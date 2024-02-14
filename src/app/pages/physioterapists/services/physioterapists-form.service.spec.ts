import { TestBed } from '@angular/core/testing';

import { PhysioterapistsFormService } from './physioterapists-form.service';

describe('PhysioterapistsFormService', () => {
  let service: PhysioterapistsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysioterapistsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
