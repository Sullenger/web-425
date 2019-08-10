/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 10 August 2019
; Modified By: Jason Sullenger
; Description: Material Design with FlexLayout
;===========================================
*/

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule
} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'


@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
