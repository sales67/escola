import { TestBed, inject } from '@angular/core/testing';

import { FormulariService } from './formulari.service';

describe('FormulariService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormulariService]
    });
  });

  it('should ...', inject([FormulariService], (service: FormulariService) => {
    expect(service).toBeTruthy();
  }));
});
