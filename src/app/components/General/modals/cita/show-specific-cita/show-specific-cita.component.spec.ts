import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpecificCitaComponent } from './show-specific-cita.component';

describe('ShowSpecificCitaComponent', () => {
  let component: ShowSpecificCitaComponent;
  let fixture: ComponentFixture<ShowSpecificCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSpecificCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSpecificCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
