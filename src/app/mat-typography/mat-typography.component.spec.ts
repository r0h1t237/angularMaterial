import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTypographyComponent } from './mat-typography.component';

describe('MatTypographyComponent', () => {
  let component: MatTypographyComponent;
  let fixture: ComponentFixture<MatTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatTypographyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
