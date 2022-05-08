import { TestBed } from '@angular/core/testing';

import { ShowingreservedService } from './showingreserved.service';

describe('ShowingreservedService', () => {
  let service: ShowingreservedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowingreservedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
