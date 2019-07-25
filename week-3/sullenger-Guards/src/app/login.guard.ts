/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 24 July 2019
; Modified By: Jason Sullenger
; Description: Guarding routes
;===========================================
*/

import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor (private router: Router) {}

  canActivate () {
    let loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert("You're not logged in - Redirecting to Home page");
      this.router.navigate(["login"]);
    }

    return loggedIn;

  }

}
