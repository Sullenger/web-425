/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 10 July 2019
; Modified By: Jason Sullenger
; Description: Building an angular app with components and modules using angular CLI
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p style="text-align:center; color:blue; border: 1px solid black; height:200px">
      Sully's shipping component
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
