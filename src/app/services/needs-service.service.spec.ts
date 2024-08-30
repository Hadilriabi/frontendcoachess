import { TestBed } from '@angular/core/testing';

import { NeedsServiceService } from './needs-service.service';

describe('NeedsServiceService', () => {
  let service: NeedsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeedsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
