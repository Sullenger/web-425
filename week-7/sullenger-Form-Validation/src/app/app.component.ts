/*
============================================
; Title: Exercise 7.3
; Author: Professor Krasso
; Date: 23 August 2019
; Modified By: Jason Sullenger
; Description: Form Validation
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sullenger-Form-Validation';

  onSubmit(formData) {
    console.log(formData);
  }
}
