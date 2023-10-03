import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabladehorarioComponent } from './tabladehorario.component';

describe('TabladehorarioComponent', () => {
  let component: TabladehorarioComponent;
  let fixture: ComponentFixture<TabladehorarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabladehorarioComponent]
    });
    fixture = TestBed.createComponent(TabladehorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
