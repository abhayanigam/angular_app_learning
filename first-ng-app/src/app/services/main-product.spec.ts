import { TestBed } from '@angular/core/testing';

import { MainProduct } from './main-product';

describe('MainProduct', () => {
  let service: MainProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainProduct);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
