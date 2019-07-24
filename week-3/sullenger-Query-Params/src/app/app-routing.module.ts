/*
============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: 23 July 2019
; Modified By: Jason Sullenger
; Description: Passing data to routes
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'
import { E404Component } from './e404/e404.component'


const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"user/:id", component: UserComponent },
  { path:"**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, UserComponent, E404Component]
