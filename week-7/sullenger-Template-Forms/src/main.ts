/*
============================================
; Title: Exercise 7.2
; Author: Professor Krasso
; Date: 23 August 2019
; Modified By: Jason Sullenger
; Description: Template driven forms
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
