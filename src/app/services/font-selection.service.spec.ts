import { TestBed } from '@angular/core/testing';

import { FontSelectionService } from './font-selection.service';

describe('FontSelectionService', () => {
  let service: FontSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FontSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
