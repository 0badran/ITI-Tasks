import { TestBed } from '@angular/core/testing';

import { SharProductsService } from './shar-products.service';

describe('SharProductsService', () => {
  let service: SharProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
