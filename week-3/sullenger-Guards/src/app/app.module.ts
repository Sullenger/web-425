/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 24 July 2019
; Modified By: Jason Sullenger
; Description: Guarding routes
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReactiveFormsModule } from "@angular/forms";
import { UnsavedChangesGuard } from "./unsaved-changes.guard";
import { LoginGuard} from "./login.guard";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy}, LoginGuard, UnsavedChangesGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
