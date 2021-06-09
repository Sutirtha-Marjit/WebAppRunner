import { TestBed } from '@angular/core/testing';

import { NavManagerService } from './nav-manager.service';

describe('NavManagerService', () => {
  let service: NavManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
