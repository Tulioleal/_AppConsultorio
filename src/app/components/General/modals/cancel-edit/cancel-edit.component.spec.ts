import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelEditComponent } from './cancel-edit.component';

describe('CancelEditComponent', () => {
  let component: CancelEditComponent;
  let fixture: ComponentFixture<CancelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
