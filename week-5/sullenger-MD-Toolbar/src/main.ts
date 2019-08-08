/*
============================================
; Title: Exercise 5.2
; Author: Professor Krasso
; Date: 07 August 2019
; Modified By: Jason Sullenger
; Description: Material Design Toolbar
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
