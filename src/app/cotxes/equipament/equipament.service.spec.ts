import { TestBed, inject } from '@angular/core/testing';

import { EquipamentService } from './equipament.service';

describe('EquipamentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipamentService]
    });
  });

  it('should ...', inject([EquipamentService], (service: EquipamentService) => {
    expect(service).toBeTruthy();
  }));
});
