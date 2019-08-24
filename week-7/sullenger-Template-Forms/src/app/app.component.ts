/*
============================================
; Title: Exercise 7.2
; Author: Professor Krasso
; Date: 23 August 2019
; Modified By: Jason Sullenger
; Description: Template driven forms
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sullenger-Template-Forms';

  onSubmit(formData) {
    console.log(formData);
  }
}
