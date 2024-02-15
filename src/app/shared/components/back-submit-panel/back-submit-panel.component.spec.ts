import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSubmitPanelComponent } from './back-submit-panel.component';

describe('BackSubmitPanelComponent', () => {
  let component: BackSubmitPanelComponent;
  let fixture: ComponentFixture<BackSubmitPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackSubmitPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackSubmitPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
