import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookieStorageComponent } from './ngx-cookie-storage.component';

describe('NgxCookieStorageComponent', () => {
  let component: NgxCookieStorageComponent;
  let fixture: ComponentFixture<NgxCookieStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCookieStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCookieStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
