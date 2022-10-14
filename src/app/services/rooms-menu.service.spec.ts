import { TestBed } from '@angular/core/testing';

import { RoomsMenuService } from './rooms-menu.service';

describe('RoomsMenuService', () => {
  let service: RoomsMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
