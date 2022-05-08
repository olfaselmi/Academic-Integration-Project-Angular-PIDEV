import { TestBed } from '@angular/core/testing';

import { TravelplanningService } from './travelplanning.service';

describe('TravelplanningService', () => {
  let service: TravelplanningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelplanningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
