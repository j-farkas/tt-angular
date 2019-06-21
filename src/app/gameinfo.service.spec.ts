import { TestBed, inject } from '@angular/core/testing';

import { GameinfoService } from './gameinfo.service';

describe('GameinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameinfoService]
    });
  });

  it('should be created', inject([GameinfoService], (service: GameinfoService) => {
    expect(service).toBeTruthy();
  }));
});
