/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 10 August 2019
; Modified By: Jason Sullenger
; Description: Material Design with FlexLayout
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
