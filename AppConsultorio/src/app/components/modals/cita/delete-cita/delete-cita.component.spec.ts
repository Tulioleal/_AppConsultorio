import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCitaComponent } from './delete-cita.component';

describe('DeleteCitaComponent', () => {
  let component: DeleteCitaComponent;
  let fixture: ComponentFixture<DeleteCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
