/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 24 July 2019
; Modified By: Jason Sullenger
; Description: Guarding routes
;===========================================
*/

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <h1 class="home">
      Home Component
    </h1>
  `,
  styles: [`
    .home {
      margin-top: 20px;
      color: red;
    }
  `]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
