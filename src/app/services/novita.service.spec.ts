import { TestBed } from '@angular/core/testing';

import { NovitaService } from './novita.service';

describe('NovitaService', () => {
  let service: NovitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
