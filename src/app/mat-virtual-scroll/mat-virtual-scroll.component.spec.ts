import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatVirtualScrollComponent } from './mat-virtual-scroll.component';

describe('MatVirtualScrollComponent', () => {
  let component: MatVirtualScrollComponent;
  let fixture: ComponentFixture<MatVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatVirtualScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
