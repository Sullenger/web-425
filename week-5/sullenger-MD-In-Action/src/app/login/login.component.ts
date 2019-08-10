/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 10 August 2019
; Modified By: Jason Sullenger
; Description: Material Design with FlexLayout
;===========================================
*/

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-component",
  template: `
    <div class="wrapper parent">
      <div class="left" fxFlex="20%"></div>
      <div class="right" fxFlex="80%">
        <div class="frm-login marginAuto" fxFlex="80%">
          <mat-card class="frm-login-panel">
            <mat-card-header class="frm-login-header">
              <mat-toolbar color="accent" class="frm-login-toolbar"
                >Please Sign In</mat-toolbar
              >
            </mat-card-header>
            <mat-card-content class="frm-login-body">
              <mat-form-field class="fullWidth">
                <input type="text" matInput placeholder="Username" />
              </mat-form-field>
              <mat-form-field class="fullWidth">
                <input type="text" matInput placeholder="Password" />
              </mat-form-field>
            </mat-card-content>

            <mat-card-actions class="frm-login-actions">
              <button mat-raised-button class="btn-login">Sign In</button>
              <button mat-raised-button [routerLink]="['/']" class="btn-cancel">
                Cancel
              </button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
