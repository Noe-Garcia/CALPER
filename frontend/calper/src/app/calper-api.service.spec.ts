import { TestBed } from '@angular/core/testing';

import { CalperApiService } from './calper-api.service';

describe('CalperApiService', () => {
  let service: CalperApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalperApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
