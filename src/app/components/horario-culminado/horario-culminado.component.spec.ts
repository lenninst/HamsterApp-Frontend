import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioCulminadoComponent } from './horario-culminado.component';

describe('HorarioCulminadoComponent', () => {
  let component: HorarioCulminadoComponent;
  let fixture: ComponentFixture<HorarioCulminadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorarioCulminadoComponent]
    });
    fixture = TestBed.createComponent(HorarioCulminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
