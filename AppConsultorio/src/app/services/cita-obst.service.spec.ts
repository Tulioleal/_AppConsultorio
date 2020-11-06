import { TestBed } from '@angular/core/testing';

import { CitaObstService } from './cita-obst.service';

describe('CitaObstService', () => {
  let service: CitaObstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaObstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
