import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRadioButtonComponent } from './mat-radio-button.component';

describe('MatRadioButtonComponent', () => {
  let component: MatRadioButtonComponent;
  let fixture: ComponentFixture<MatRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatRadioButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
