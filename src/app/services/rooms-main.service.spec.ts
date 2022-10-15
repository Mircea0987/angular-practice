import { TestBed } from '@angular/core/testing';

import { RoomsMainService } from './rooms-main.service';

describe('RoomsMainService', () => {
  let service: RoomsMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
