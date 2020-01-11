import { TestBed } from '@angular/core/testing';

import { OfferrideService } from './offerride.service';

describe('OfferrideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferrideService = TestBed.get(OfferrideService);
    expect(service).toBeTruthy();
  });
});
