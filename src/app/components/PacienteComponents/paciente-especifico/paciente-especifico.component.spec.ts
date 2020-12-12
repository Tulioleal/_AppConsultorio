import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteEspecificoComponent } from './paciente-especifico.component';

describe('PacienteEspecificoComponent', () => {
  let component: PacienteEspecificoComponent;
  let fixture: ComponentFixture<PacienteEspecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteEspecificoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
