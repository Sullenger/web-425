/*
============================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Date: 17 August 2019
; Modified By: Jason Sullenger
; Description: Angular onChange() events
;===========================================
*/

import { Component, Input, SimpleChanges, OnChanges } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <div class="childContainer">
      <div class="child">
        <h2 style="margin-top:0px;">Child</h2>
        <div>Greeting: {{ greeting }}</div>
        <div class="paddingTop">Username: {{ user.name }}</div>
      </div>
    </div>
  `,
  styles: [
    `
      .childContainer {
        margin: 100px auto;
        background-color: #403E3E;
        width: 70%;
        color: white;
      }
      .child {
        padding: 20px 50px;
      }
      .paddingTop {
        padding-top: 15px;
      }
    `
  ]
})
export class ChildComponent implements OnChanges {
  @Input() greeting: string;
  @Input() user: { name: string };

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

  // ngOnInit() {}
}
