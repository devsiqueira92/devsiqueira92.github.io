import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAppointmentDetailsComponent } from './medical-appointment-details.component';

describe('MedicalAppointmentDetailsComponent', () => {
  let component: MedicalAppointmentDetailsComponent;
  let fixture: ComponentFixture<MedicalAppointmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalAppointmentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalAppointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
