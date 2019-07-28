/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 23 July 2019
; Modified By: Jason Sullenger
; Description: implementing child routes
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="homeContainer">
    <h2>
      Marty McChemical's Toxic Material Emporium
    </h2>
    <p>Your hazards are our speciality</p>
    </div>
  `,
  styles: [`
    h2, p {
      text-align: center;
      padding: 20px;
      color: #4ee138;

    }
    .homeContainer {
      background:#343a40;
      height:252px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
