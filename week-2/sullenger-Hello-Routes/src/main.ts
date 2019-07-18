/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 17 July 2019
; Modified By: Jason Sullenger
; Description: Angular routing
;===========================================
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
