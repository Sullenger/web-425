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
  selector: "app-login",
  template: `
    <h1 class="login">
      Please Log In
    </h1>
  `,
  styles: [
    `
      .login {
        margin-top: 20px;
        color: blue;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
