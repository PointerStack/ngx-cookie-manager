// NOTE: 
// Many of following code are inspired from https://github.com/7leads/ngx-cookie-service
// Thanks to 7leads GmbH Team.
//
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NgxCookieStorageService {

  private documentIsAccessible: boolean;

  constructor(
    // The type `Document` may not be used here. Although a fix is on its way,
    // we will go with `any` for now to support Angular 2.4.x projects.
    // Issue: https://github.com/angular/angular/issues/12631
    // Fix: https://github.com/angular/angular/pull/14894
    @Inject(DOCUMENT) private document: any
  ) {
    // To avoid issues with server side prerendering, check if `document` is defined.
    this.documentIsAccessible = document !== undefined;
  }


  /**
   * PARSER
   * 
   * Function to parse document.cookie string and extract
   * cookiename:value pairs.
   */
  private parser(): any {
    if (!this.documentIsAccessible) {
      return {};
    }
    const cookies: {} = {};
    const document: any = this.document;
    if (document.cookie && document.cookie !== '') {
      const split: Array<string> = document.cookie.split(';');
      for (let i = 0; i < split.length; i += 1) {
        const currentCookie: Array<string> = split[i].split('=');
        currentCookie[0] = currentCookie[0].replace(/^ /, '');
        cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
      }
    }
    return cookies;
  }


  /**
   * GET
   * 
   * Function to get value from cookie
   * 
   * @param name Cookie Name
   * @param parsedCookie Parsed Cookie
   */
  public get(name: string, parsedCookie?: {}): void | string {
    if (!parsedCookie) {
      parsedCookie = this.parser();
    }
    return parsedCookie[name];
  }


  /**
   * GETALL
   * 
   * Function to get all stored cookie.
   */
  public getAll(): void | {} {
    return this.parser();
  }


  /**
   * GET-ASYNC
   * 
   * Function to get cookie value as promise.
   * 
   * @param name {string}
   * @returns
   */
  public getAsync(name: string): Promise<void | string | Error> {
    const _getAsyncPromiseCb = (resolve, reject) => {
      if (!this.documentIsAccessible) {
        return reject(new Error(`document.cookie is not accessible`));
      }
      return resolve(this.get(name));
    };
    return new Promise(_getAsyncPromiseCb);
  }


  /**
   * GETALL-ASYNC
   * 
   * Function to get all stored cookie value as promise.
   * 
   */
  public getAllAsync(): Promise<void | string | Error> {
    const _getAsyncPromiseCb = (resolve, reject) => {
      if (!this.documentIsAccessible) {
        return reject(new Error(`document.cookie is not accessible`));
      }
      return resolve(this.getAll());
    };
    return new Promise(_getAsyncPromiseCb);
  }


  /**
   * SET
   * 
   * Function to set cookie
   * 
   * @param name    Cookie name
   * @param value   Cookie value
   * @param expires Number of days until the cookies expires or an actual `Date`
   * @param path    Cookie path
   * @param domain  Cookie domain
   * @param secure  Secure flag
   */
  public set(
    name: string,
    value: string,
    expires?: number | Date,
    path?: string,
    domain?: string,
    secure?: boolean
  ): void {
    if (!this.documentIsAccessible) {
      return;
    }

    let cookieString: string = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';

    if (expires) {
      if (typeof expires === 'number') {
        const dateExpires: Date = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);

        cookieString += 'expires=' + dateExpires.toUTCString() + ';';
      } else {
        cookieString += 'expires=' + expires.toUTCString() + ';';
      }
    }

    if (path) {
      cookieString += 'path=' + path + ';';
    }

    if (domain) {
      cookieString += 'domain=' + domain + ';';
    }

    if (secure) {
      cookieString += 'secure;';
    }

    this.document.cookie = cookieString;
  }


  /**
   * SET-ASYNC
   * 
   * Function to set cookie asynchronously.
   * 
   * @param name 
   * @param value 
   * @param expires 
   * @param path 
   * @param domain 
   * @param secure 
   */
  public setAsync(
    name: string,
    value: string,
    expires?: number | Date,
    path?: string,
    domain?: string,
    secure?: boolean
  ): Promise<void | Error> {
    const _setAsync = (resolve, reject) => {
      if (!this.documentIsAccessible) {
        return reject(new Error(`document.cookie is not accessible`));
      }
      this.set(name, value, expires, path, domain, secure);
      setTimeout(() => {
        return resolve();
      }, 50);
    };
    return new Promise(_setAsync);
  }


  /**
   * DELETE
   * 
   * Function to delete a cookie
   * 
   * @param name   Cookie name
   * @param path   Cookie path
   * @param domain Cookie domain
   */
  public delete(name: string, path?: string, domain?: string): void {
    if (!this.documentIsAccessible) {
      return;
    }
    this.set(name, '', new Date(new Date().getTime() - 1000), path, domain);
  }


  /**
   * DELETEALL
   * 
   * Function to delete all cookie
   * 
   * @param path   Cookie path
   * @param domain Cookie domain
   */
  public deleteAll(path?: string, domain?: string): void {
    if (!this.documentIsAccessible) {
      return;
    }
    const cookies: any = this.getAll();
    for (const cookieName in cookies) {
      if (cookies.hasOwnProperty(cookieName)) {
        this.delete(cookieName, path, domain);
      }
    }
  }


  /**
   * DELETE-ASYNC
   * 
   * Function to delete a cookie asynchronously.
   * 
   * @param name   Cookie name
   * @param path   Cookie path
   * @param domain Cookie domain
   */
  public deleteAsync(name: string, path?: string, domain?: string): Promise<void | Error> {
    const _deleteAsyncPromiseCb = (resolve, reject) => {
      if (!this.documentIsAccessible) {
        return reject(new Error(`document.cookie is not accessible`));
      }
      this.delete(name, path, domain);
      setTimeout(() => {
        return resolve();
      }, 50);
    }
    return new Promise(_deleteAsyncPromiseCb);
  }


  /**
   * DELETEALL-ASYNC
   * 
   * Function to delete all cookie asynchronously.
   * 
   * @param path   Cookie path
   * @param domain Cookie domain
   */
  public deleteAllAsync(path?: string, domain?: string): Promise<void | Error> {
    const _deleteAllAsyncPromiseCb = (resolve, reject) => {
      if (!this.documentIsAccessible) {
        return reject(new Error(`document.cookie is not accessible`));
      }
      this.deleteAll(path, domain);
      setTimeout(() => {
        return resolve();
      }, 50);
    };
    return new Promise(_deleteAllAsyncPromiseCb);
  }
}
