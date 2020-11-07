import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitaObstComponent } from './add-cita-obst.component';

describe('AddCitaObstComponent', () => {
  let component: AddCitaObstComponent;
  let fixture: ComponentFixture<AddCitaObstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCitaObstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCitaObstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
