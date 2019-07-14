/*
============================================
; Title: Exercise 1.3
; Author: Professor Krasso
; Date: 10 July 2019
; Modified By: Jason Sullenger
; Description: Hello World using CLI
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Hello World';
}
