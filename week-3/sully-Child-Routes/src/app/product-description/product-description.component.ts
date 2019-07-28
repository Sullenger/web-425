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

@Component({
  selector: 'app-product-description',
  template: `
    <div class="productContainer">
      <h4 class="text-danger">Toxic!</h4>
      <p class="text-white">Please keep out of reach of children!</p>
    </div>
  `,
  styles: [`
  .productContainer {
    background:#343a40;
    padding:20px
  }
  `]
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
