import { TestBed } from '@angular/core/testing';

import { subscribeservice } from './subscribe.service';

describe('subscribeservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: subscribeservice = TestBed.get(subscribeservice);
    expect(service).toBeTruthy();
  });
});
