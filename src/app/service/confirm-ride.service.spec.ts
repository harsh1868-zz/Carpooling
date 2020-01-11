import { TestBed } from '@angular/core/testing';

import { ConfirmRideService } from './confirm-ride.service';

describe('ConfirmRideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmRideService = TestBed.get(ConfirmRideService);
    expect(service).toBeTruthy();
  });
});
