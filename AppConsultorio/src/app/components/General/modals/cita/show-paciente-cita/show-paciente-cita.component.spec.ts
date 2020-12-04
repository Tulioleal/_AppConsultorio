import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPacienteCitaComponent } from './show-paciente-cita.component';

describe('ShowPacienteCitaComponent', () => {
  let component: ShowPacienteCitaComponent;
  let fixture: ComponentFixture<ShowPacienteCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPacienteCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPacienteCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
