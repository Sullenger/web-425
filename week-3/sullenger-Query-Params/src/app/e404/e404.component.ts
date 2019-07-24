/*
============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: 23 July 2019
; Modified By: Jason Sullenger
; Description: Passing data to routes
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h4>This is not the page you're looking for</h4>
      </div>
    </div>
  `,
  styles: [`
    .container{
      margin-top: 20px;
    }
    h4 {
      color: green;
    }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
