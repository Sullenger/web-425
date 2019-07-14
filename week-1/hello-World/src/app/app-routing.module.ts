/*
============================================
; Title: Exercise 1.3
; Author: Professor Krasso
; Date: 10 July 2019
; Modified By: Jason Sullenger
; Description: Hello World using CLI
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
