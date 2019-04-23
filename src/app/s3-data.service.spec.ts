import { TestBed } from '@angular/core/testing';

import { S3DataService } from './s3-data.service';

describe('S3DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: S3DataService = TestBed.get(S3DataService);
    expect(service).toBeTruthy();
  });
});
