/*
============================================
; Title: Exercise 1.3
; Author: Professor Krasso
; Date: 10 July 2019
; Modified By: Jason Sullenger
; Description: Hello World using CLI
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
