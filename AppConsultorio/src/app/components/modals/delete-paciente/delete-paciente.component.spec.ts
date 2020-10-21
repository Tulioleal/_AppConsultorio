import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePacienteComponent } from './delete-paciente.component';

describe('DeletePacienteComponent', () => {
  let component: DeletePacienteComponent;
  let fixture: ComponentFixture<DeletePacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
