/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Professor Krasso
; Date: 08 September 2019
; Modified By: Jason Sullenger
; Description: Order form with invoice pop-up for Bob assignment
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
