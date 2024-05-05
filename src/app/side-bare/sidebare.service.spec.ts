import { TestBed } from '@angular/core/testing';

import { SidebareService } from './sidebare.service';

describe('SidebareService', () => {
  let service: SidebareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
