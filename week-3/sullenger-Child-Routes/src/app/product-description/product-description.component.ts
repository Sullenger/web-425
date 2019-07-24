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
  <h4>
    Toxic
  </h4>
  <p>
      Keep out of reach of children!
    </p>
  `,
  styles: [`
    h4 {
      color: red
    }
    p {
      font-weight: bold;
    }
  `]
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
