import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCitaGinecoComponent } from './edit-cita-gineco.component';

describe('EditCitaGinecoComponent', () => {
  let component: EditCitaGinecoComponent;
  let fixture: ComponentFixture<EditCitaGinecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCitaGinecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCitaGinecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
