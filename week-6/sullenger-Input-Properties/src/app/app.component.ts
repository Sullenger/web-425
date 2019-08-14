/*
============================================
; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 13 August 2019
; Modified By: Jason Sullenger
; Description: Material Design input properties
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sullenger-Input-Properties';

  stock: string;
  readonly numberOfShares = 100

  onChangeEvent({ target }): void {
    this.stock = target.value;
  }
}
