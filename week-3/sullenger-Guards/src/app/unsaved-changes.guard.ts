/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 24 July 2019
; Modified By: Jason Sullenger
; Description: Guarding routes
;===========================================
*/

import { Injectable } from "@angular/core";
import { CanDeactivate, Router } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Injectable ()

export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {

  canDeactivate(component: ProductDetailComponent) {
    if (component.name.dirty) {
      return window.confirm("Unsaved changes detected - Would you still like to leave the page?");
    } else {
      return true;
    }
  }

}
