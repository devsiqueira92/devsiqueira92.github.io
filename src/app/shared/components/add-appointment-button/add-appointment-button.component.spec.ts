import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentButtonComponent } from './add-appointment-button.component';

describe('AddAppointmentButtonComponent', () => {
  let component: AddAppointmentButtonComponent;
  let fixture: ComponentFixture<AddAppointmentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAppointmentButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAppointmentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
