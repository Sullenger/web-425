/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso
; Date: 15 July 2019
; Modified By: Jason Sullenger
; Description: Testing Angular one-way binding
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: [
    `
    h1 {
      color: red;
    }
    `
  ]
})
export class AppComponent {
  title = 'one-Way-Binding';

  name:string = "[REDACTED]";

  changeName() {
    this.name = "Jason Sullenger"
  }
}
