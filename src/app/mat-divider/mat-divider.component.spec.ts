import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDividerComponent } from './mat-divider.component';

describe('MatDividerComponent', () => {
  let component: MatDividerComponent;
  let fixture: ComponentFixture<MatDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatDividerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
