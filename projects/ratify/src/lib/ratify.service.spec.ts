import { TestBed } from '@angular/core/testing';

import { RatifyService } from './ratify.service';

describe('RatifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RatifyService = TestBed.get(RatifyService);
    expect(service).toBeTruthy();
  });
});
