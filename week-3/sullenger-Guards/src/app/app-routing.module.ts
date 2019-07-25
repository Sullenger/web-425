/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 24 July 2019
; Modified By: Jason Sullenger
; Description: Guarding routes
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { LoginGuard } from './login.guard';
import { UnsavedChangesGuard } from './unsaved-changes.guard';
import { unsupported } from '@angular/compiler/src/render3/view/util';



const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {
    path:"product",
    component: ProductDetailComponent,
    canActivate: [LoginGuard],
    canDeactivate:[UnsavedChangesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, ProductDetailComponent]
