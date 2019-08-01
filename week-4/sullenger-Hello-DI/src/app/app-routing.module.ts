/*
============================================
; Title: Exercise 4.2
; Author: Professor Krasso
; Date: 01 August 2019
; Modified By: Jason Sullenger
; Description: Inversion of Control and Dependency Injection
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component"
import { FruitComponent } from './fruit/fruit.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "fruit", component: FruitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
