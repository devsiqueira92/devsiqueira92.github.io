import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioterapistDetailsComponent } from './physioterapist-details.component';

describe('PhysioterapistDetailsComponent', () => {
  let component: PhysioterapistDetailsComponent;
  let fixture: ComponentFixture<PhysioterapistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysioterapistDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysioterapistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
