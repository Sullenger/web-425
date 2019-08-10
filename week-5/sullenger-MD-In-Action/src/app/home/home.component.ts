/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 10 August 2019
; Modified By: Jason Sullenger
; Description: Material Design with FlexLayout
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="parent">
  <div class="left" fxFlex="20%"></div>
  <div class="right" fxFlex="80%">
    <h2 class="marginAuto">Welcome to Sully's Angular Material Assignment</h2>
  </div>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
