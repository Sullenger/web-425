/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 24 July 2019
; Modified By: Jason Sullenger
; Description: Guarding routes
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  template: `
    <h1 class="product">
      Product Detail Component
    </h1>

    <input placeholder="Enter name here" type="text" [formControl]="name">
  `,
  styles: [`
    .product {
      margin-top: 20px;
      background-color: grey;
      color: green;
      height: 50px;
    }
  `]
})
export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl;

  constructor() { }

  ngOnInit() {
  }

}
