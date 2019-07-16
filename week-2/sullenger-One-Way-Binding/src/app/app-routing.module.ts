/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso
; Date: 15 July 2019
; Modified By: Jason Sullenger
; Description: Testing Angular one-way binding
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
