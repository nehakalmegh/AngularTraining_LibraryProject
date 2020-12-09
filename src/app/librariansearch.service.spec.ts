import { TestBed } from '@angular/core/testing';

import { LibrariansearchService } from './librariansearch.service';

describe('LibrariansearchService', () => {
  let service: LibrariansearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrariansearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
