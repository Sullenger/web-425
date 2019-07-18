/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 17 July 2019
; Modified By: Jason Sullenger
; Description: Angular routing
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h2 style="padding-top: 20px; margin-left: 50px; color:red">
      I'm not HOME right now.
    </h2>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
