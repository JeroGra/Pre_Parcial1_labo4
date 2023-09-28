import { TestBed } from '@angular/core/testing';

import { BdActoresService } from './bd-actores.service';

describe('BdActoresService', () => {
  let service: BdActoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdActoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
