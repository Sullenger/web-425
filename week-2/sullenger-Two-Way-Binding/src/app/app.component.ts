/*
============================================
; Title: Exercise 2.3
; Author: Professor Krasso
; Date: 15 July 2019
; Modified By: Jason Sullenger
; Description: Angular two way binding
;===========================================
*/

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Two-Way Binding</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <br /><br />

    <div class="container-fluid two-way-form bg-dark">
      <h2 class="text-light">Two Way Binding</h2>
      <br />
      <div class="form-group">
        <input
          class="form-control center"
          type="text"
          placeholder="Enter name here"
          maxlength="25"
          [(ngModel)]="name"
        />
        <button class="btn btn-secondary form-control" (click)="name = ''">
          Clear
        </button>
      </div>

      <div>
        <h4 class="noticeMe">Hey {{ name }}, this is two-way binding!</h4>
      </div>
    </div>
  `,
  styles: [
    `
      .two-way-form {
        width: 50%;
        text-align: center;
      }
      .noticeMe {
        color: red;
        padding-bottom: 20px;
      }
      .form-group {
        height: 100px;
      }
      .form-control {
        height: 50px;
        width: 75%;
      }
      .center {
        margin: 0 auto;
      }
    `
  ]
})
export class AppComponent {
  title = "sullenger-Two-Way-Binding";

  name: string = "";
}
