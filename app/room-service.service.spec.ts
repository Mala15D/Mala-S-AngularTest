import { TestBed } from '@angular/core/testing';

import { RoomServiceService } from './service/room-service.service';

describe('RoomServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomServiceService = TestBed.get(RoomServiceService);
    expect(service).toBeTruthy();
  });
});
