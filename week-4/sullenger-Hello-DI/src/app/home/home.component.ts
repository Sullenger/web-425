/*
============================================
; Title: Exercise 4.2
; Author: Professor Krasso
; Date: 01 August 2019
; Modified By: Jason Sullenger
; Description: Inversion of Control and Dependency Injection
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>A fruity table representing the fruit on my table</h1>
  `,
  styles: [`
    h1 {
      color:Grey;
      text-align:center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
