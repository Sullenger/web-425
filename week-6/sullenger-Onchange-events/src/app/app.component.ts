/*
============================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Date: 17 August 2019
; Modified By: Jason Sullenger
; Description: Angular onChange() events
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sullenger-Onchange-events';

  myGreeting = 'Hello';
  myUser: { name: string} = {name: 'Jason'}
}
