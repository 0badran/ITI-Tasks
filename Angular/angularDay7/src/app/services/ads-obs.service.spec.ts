import { TestBed } from '@angular/core/testing';

import { AdsObsService } from './ads-obs.service';

describe('AdsObsService', () => {
  let service: AdsObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
