/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 23 July 2019
; Modified By: Jason Sullenger
; Description: implementing child routes
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-seller-info',
  template: `
    <p>
      McToxic Chemicals, Inc., id {{ sellerId}}
    </p>
  `,
  styles: []
})
export class SellerInfoComponent implements OnInit {

  sellerId: string;

  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.paramMap.get('id')
  }

  ngOnInit() {
  }
}
