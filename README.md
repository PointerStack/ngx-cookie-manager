# Ngx Cookie Storage

An Angular service for cookies. This package is inspired by [NGX Cookie Service](https://www.npmjs.com/package/ngx-cookie-service).


# Installation

```bash
npm install @pointerstack/ngx-cookie-storage --save
```

Add the cookie service to your `app.module.ts` as a provider:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCookieStorageService } from '@pointerstack/ngx-cookie-storage'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NgxCookieStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then, import and inject it into a component:

```typescript
import { Component } from '@angular/core';
import { NgxCookieStorageService } from '@pointerstack/ngx-cookie-storage'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-cookie-storage-tester';
  constructor(private cookieStorageService: NgxCookieStorageService) {
    this.cookieStorageService.set('foo', 'bar');
  }
}
```

That's it!

# Methods

## get(name: string, parsedCookie?: {}): void | string;
```typescript
const fooValue: void | string = this.cookieStorageService.get('foo');
```

## getAll(): void | {};
```typescript
const allCookies: {} = this.cookieStorageService.getAll();
```

## getAsync(name: string): Promise<void | string | Error>;
```typescript
this.fooValue: void | string;
this.cookieStorageService.getAsync('foo').then((fooValue) => {
    this.fooValue = fooValue;
}).catch((err) => {
    console.error(err);
});
```

## getAllAsync(): Promise<void | string | Error>;
```typescript
this.allCookies: {};
this.cookieStorageService.getAllAsync().then((allValue) => {
    this.allCookies = allValue;
}).catch((err) => {
    console.error(err);
});
```

## set(name: string, value: string, expires?: number | Date, path?: string, domain?: string, secure?: boolean): void;

```typescript
// simple cookie set
this.cookieStorageService.set( 'foo', 'bar' );

// with path
this.cookieStorageService.set( 'foo', 'bar', '/' );

// with 2 days expiration
this.cookieStorageService.set( 'foo', 'bar', '/', 2);

// with domain
this.cookieStorageService.set( 'foo', 'bar', '/', 2, 'yourdomain.com');

// with domain and secure cookie
this.cookieStorageService.set( 'foo', 'bar', '/', 2, 'yourdomain.com', true);
```

## setAsync(name: string, value: string, expires?: number | Date, path?: string, domain?: string, secure?: boolean): Promise<void | Error>;
```typescript
// simple cookie set
this.cookieStorageService.setAsync( 'foo', 'bar' ).then(() => {
    console.log('Cookie has been set successfully.');
}).catch((err) => {
    console.error(err);
});
```

## delete(name: string, path?: string, domain?: string): void;
```typescript
this.cookieStorageService.delete('foo');
```

## deleteAll( path?: string, domain?: string ): void;
```typescript
this.cookieStorageService.deleteAll();
```

## deleteAsync(name: string, path?: string, domain?: string): Promise<void | Error>;
```typescript
this.cookieStorageService.deleteAsync('foo').then(() => {
    console.log('Cookie has been deleted successfully.');
}).catch((err) => {
    console.error(err);
});
```

## deleteAllAsync(path?: string, domain?: string): Promise<void | Error>;
```typescript
this.cookieStorageService.deleteAllAsync().then(() => {
    console.log('All Cookies has been deleted successfully.');
}).catch((err) => {
    console.error(err);
});
```

# Opening issues

Please open issues here [https://github.com/PointerStack/ngx-cookie-storage/issues](https://github.com/PointerStack/ngx-cookie-storage/issues)

# Contributing

We are welcoming people to contribute and accepting pull requests with test cases.
[Open a new pull request](https://github.com/PointerStack/ngx-cookie-storage/compare)

# License

[MIT](https://github.com/PointerStack/ngx-cookie-storage/blob/master/LICENSE)
