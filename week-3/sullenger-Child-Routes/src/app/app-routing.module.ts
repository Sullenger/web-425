/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 23 July 2019
; Modified By: Jason Sullenger
; Description: implementing child routes
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "product/:id", component: ProductDetailComponent,
    children: [
      { path: "", component: ProductDescriptionComponent },
      { path: "seller/:id", component: SellerInfoComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ProductDetailComponent, ProductDescriptionComponent, SellerInfoComponent]
