import { TestBed } from '@angular/core/testing';

import { FlipcartdataService } from './flipcartdata.service';

describe('FlipcartdataService', () => {
  let service: FlipcartdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipcartdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
