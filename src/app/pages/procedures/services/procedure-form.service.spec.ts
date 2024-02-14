import { TestBed } from '@angular/core/testing';

import { ProcedureFormService } from './procedure-form.service';

describe('ProcedureFormService', () => {
  let service: ProcedureFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcedureFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
