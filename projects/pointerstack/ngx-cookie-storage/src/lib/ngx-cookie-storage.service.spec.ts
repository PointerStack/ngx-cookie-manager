import { TestBed } from '@angular/core/testing';

import { NgxCookieStorageService } from './ngx-cookie-storage.service';

describe('NgxCookieStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({

  }));

  let testId = 'TCS1';
  it(`${testId}: should be created`, () => {
    const service: NgxCookieStorageService = TestBed.get(NgxCookieStorageService);
    expect(service).toBeTruthy();
  });

  testId = 'TCS2';
  it(`${testId}: should set cookie`, () => {
    const service: NgxCookieStorageService = TestBed.get(NgxCookieStorageService);
    const cookieKey = `Foo${testId}`;
    service.set(cookieKey, 'Bar');
    const fooValue = service.get(cookieKey);
    expect(fooValue).toBe('Bar');
  });

  testId = 'TCS3';
  it(`${testId}: should set cookie asynchronously`, (done) => {
    const service: NgxCookieStorageService = TestBed.get(NgxCookieStorageService);
    const cookieKey = `Foo${testId}`;
    service.setAsync(cookieKey, 'Bar').then(() => {
      const fooValue = service.get(cookieKey);
      expect(fooValue).toBe('Bar');
      done();
    });
  });

  testId = 'TCS4';
  it(`${testId}: should delete cookie`, () => {
    const service: NgxCookieStorageService = TestBed.get(NgxCookieStorageService);
    const cookieKey = `Foo${testId}`;
    service.set(cookieKey, 'Bar');
    const fooValue = service.get(cookieKey);
    expect(fooValue).toBe('Bar');
    service.delete(cookieKey);
    const fooValueAfterDelete = service.get(cookieKey);
    expect(fooValueAfterDelete).toBe(undefined);
  });

  testId = 'TCS5';
  it(`${testId}: should delete cookie asynchronously`, (done) => {
    const service: NgxCookieStorageService = TestBed.get(NgxCookieStorageService);
    const cookieKey = `Foo${testId}`;
    service.setAsync(cookieKey, 'Bar').then(() => {
      const fooValue = service.get(cookieKey);
      expect(fooValue).toBe('Bar');
      service.deleteAsync(cookieKey).then(() => {
        const fooValueAfterDelete = service.get(cookieKey);
        expect(fooValueAfterDelete).toBe(undefined);
        done();
      });
    });
  });

  testId = 'TCS6';
  it(`${testId}: should delete all cookie`, () => {
    const service: NgxCookieStorageService = TestBed.get(NgxCookieStorageService);
    const cookieKey = `Foo${testId}`;
    service.set(cookieKey, 'Bar');
    service.set(`${cookieKey}2`, 'Bar');
    const foo1Value = service.get(cookieKey);
    const foo2Value = service.get(`${cookieKey}2`);
    expect(foo1Value).toBe('Bar');
    expect(foo2Value).toBe('Bar');

    service.deleteAll();
    const foo1ValueAfterDelete = service.get(cookieKey);
    expect(foo1ValueAfterDelete).toBe(undefined);
    const foo2ValueAfterDelete = service.get(`${cookieKey}2`);
    expect(foo1ValueAfterDelete).toBe(undefined);
  });

  testId = 'TCS7';
  it(`${testId}: should delete all cookie asynchronously`, (done) => {
    const service: NgxCookieStorageService = TestBed.get(NgxCookieStorageService);
    const cookieKey = `Foo${testId}`;
    service.set(cookieKey, 'Bar');
    service.set(`${cookieKey}2`, 'Bar');
    const foo1Value = service.get(cookieKey);
    const foo2Value = service.get(`${cookieKey}2`);
    expect(foo1Value).toBe('Bar');
    expect(foo2Value).toBe('Bar');

    service.deleteAllAsync().then(() => {
      const foo1ValueAfterDelete = service.get(cookieKey);
      expect(foo1ValueAfterDelete).toBe(undefined);
      const foo2ValueAfterDelete = service.get(`${cookieKey}2`);
      expect(foo1ValueAfterDelete).toBe(undefined);
      done();
    });
  });
});
