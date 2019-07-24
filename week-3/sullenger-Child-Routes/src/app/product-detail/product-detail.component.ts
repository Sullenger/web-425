/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 23 July 2019
; Modified By: Jason Sullenger
; Description: implementing child routes
;===========================================
*/

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-detail",
  template: `
    <div class="container product">
      <div class="row">
        <h1>{{productId}} details</h1>
      </div>
      <div class="row">
        <router-outlet></router-outlet>
      </div>
      <div class="row">
        <p><a [routerLink]="['./seller', sellerId]">Seller Info</a></p>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }
    `
  ]
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId = 123123;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id')
  }

  ngOnInit() {}
}
