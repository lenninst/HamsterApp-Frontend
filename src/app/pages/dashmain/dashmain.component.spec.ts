import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashmainComponent } from './dashmain.component';

describe('DashmainComponent', () => {
  let component: DashmainComponent;
  let fixture: ComponentFixture<DashmainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashmainComponent]
    });
    fixture = TestBed.createComponent(DashmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
