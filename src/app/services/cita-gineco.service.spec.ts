import { TestBed } from '@angular/core/testing';

import { CitaGinecoService } from './cita-gineco.service';

describe('CitaGinecoService', () => {
  let service: CitaGinecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaGinecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
