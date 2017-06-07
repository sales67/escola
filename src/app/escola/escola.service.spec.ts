import { TestBed, inject } from '@angular/core/testing';

import { CotxesService } from './cotxes.service';

describe('CotxesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CotxesService]
    });
  });

  it('should ...', inject([CotxesService], (service: CotxesService) => {
    expect(service).toBeTruthy();
  }));
});
