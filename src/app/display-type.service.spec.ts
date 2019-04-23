import { TestBed } from '@angular/core/testing';

import { DisplayTypeService } from './display-type.service';

describe('DisplayTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayTypeService = TestBed.get(DisplayTypeService);
    expect(service).toBeTruthy();
  });
});
