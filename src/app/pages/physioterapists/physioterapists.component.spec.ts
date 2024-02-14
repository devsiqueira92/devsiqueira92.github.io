import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioterapistsComponent } from './physioterapists.component';

describe('PhysioterapistsComponent', () => {
  let component: PhysioterapistsComponent;
  let fixture: ComponentFixture<PhysioterapistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysioterapistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysioterapistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
