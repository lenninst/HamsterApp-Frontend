import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioGeneralComponent } from './horario-general.component';

describe('HorarioGeneralComponent', () => {
  let component: HorarioGeneralComponent;
  let fixture: ComponentFixture<HorarioGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorarioGeneralComponent]
    });
    fixture = TestBed.createComponent(HorarioGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
