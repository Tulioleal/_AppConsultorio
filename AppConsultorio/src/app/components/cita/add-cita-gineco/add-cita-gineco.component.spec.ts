import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitaGinecoComponent } from './add-cita-gineco.component';

describe('AddCitaGinecoComponent', () => {
  let component: AddCitaGinecoComponent;
  let fixture: ComponentFixture<AddCitaGinecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCitaGinecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCitaGinecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
