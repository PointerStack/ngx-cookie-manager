import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCookieStorageModule } from '@pointerstack/ngx-cookie-storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCookieStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
