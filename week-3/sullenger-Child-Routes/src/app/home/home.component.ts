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
  selector: 'app-home',
  template: `
    <h1>
      All of your cleaning needs!
    </h1>
  `,
  styles: [`
    h1 {
      margin-top: 20px;
      text-align: center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
