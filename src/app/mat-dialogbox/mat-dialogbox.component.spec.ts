import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogboxComponent } from './mat-dialogbox.component';

describe('MatDialogboxComponent', () => {
  let component: MatDialogboxComponent;
  let fixture: ComponentFixture<MatDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatDialogboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
