import { TestBed } from '@angular/core/testing';

import { TemplateDrivenGuard } from './template-driven.guard';

describe('TemplateDrivenGuard', () => {
  let guard: TemplateDrivenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TemplateDrivenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
