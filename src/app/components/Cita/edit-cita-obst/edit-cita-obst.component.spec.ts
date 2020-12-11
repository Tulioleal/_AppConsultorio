import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCitaObstComponent } from './edit-cita-obst.component';

describe('EditCitaObstComponent', () => {
  let component: EditCitaObstComponent;
  let fixture: ComponentFixture<EditCitaObstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCitaObstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCitaObstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
