import { TestBed } from '@angular/core/testing';

import { NgxCookieStorageService } from './ngx-cookie-storage.service';

describe('NgxCookieStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCookieStorageService = TestBed.get(NgxCookieStorageService);
    expect(service).toBeTruthy();
  });
});
