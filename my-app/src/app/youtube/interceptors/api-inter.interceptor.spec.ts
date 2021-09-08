import { TestBed } from '@angular/core/testing';

import { ApiInterInterceptor } from './api-inter.interceptor';

describe('ApiInterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiInterInterceptor,
    ],
  }));

  it('should be created', () => {
    const interceptor: ApiInterInterceptor = TestBed.inject(ApiInterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
