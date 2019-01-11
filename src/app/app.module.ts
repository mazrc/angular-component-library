import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent };
import { RatifyModule } from 'ratify';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RatifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
