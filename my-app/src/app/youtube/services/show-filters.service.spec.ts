import { TestBed } from '@angular/core/testing';

import { ShowFiltersService } from './show-filters.service';

describe('ShowFiltersService', () => {
  let service: ShowFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
